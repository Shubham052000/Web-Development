import { useEffect, useMemo, useState } from "react";

type Option = {
  label: string;
  value: number;
};

const ReusableReactDropdownParent = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://fakestoreapi.com/products?sort=asc",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setOptions(
          data.map((item: { title: string; id: number }) => ({
            label: item.title,
            value: item.id,
          })),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleSelect = (id: number) => {
    console.log("Selected product id:", id);
  };

  return (
    <ReusableReactDropdown
      options={options}
      loading={loading}
      onSelect={handleSelect}
    />
  );
};

type ReusableReactDropdownProps = {
  options: Option[];
  loading: boolean;
  onSelect?: (value: number) => void;
};

export const ReusableReactDropdown = ({
  options,
  loading,
  onSelect,
}: ReusableReactDropdownProps) => {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filteredOptions = useMemo(() => {
    if (!query.trim()) {
      return options;
    }

    return options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase()),
    );
  }, [options, query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setExpanded(true);
  };

  const handleSelect = (option: Option) => {
    setQuery(option.label);
    setExpanded(false);
    onSelect?.(option.value);
  };

  return (
    <div className="w-lg mt-3">
      <input
        className="border border-amber-50 w-full"
        placeholder="Type to search"
        value={query}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        onChange={handleChange}
      />

      {expanded && (
        <ul className="bg-slate-400 mb-3">
          {loading ? (
            <li className="border border-slate-200">Loading...</li>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((option: Option) => (
              <li
                key={option.value}
                className="border border-slate-200"
                onMouseDown={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="border border-slate-200">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};
export default ReusableReactDropdownParent;
