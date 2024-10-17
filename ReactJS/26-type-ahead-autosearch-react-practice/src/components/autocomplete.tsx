import { useEffect, useState } from "react";
import "./styles.css";
import SuggestionList from "./suggestionList";

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type ResultType = Recipe[];

type AutoCompleteProps = {
  placeholder: string;
  staticData?: string[];
  fetchSuggestions: (query: string) => Promise<ResultType>;
  dataKey: string;
  customLoading: React.ReactNode;
  onSelect: (res: any) => void;
  onChange: (input: string) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  customStyles: React.CSSProperties;
};

const AutoComplete = ({
  customLoading,
  dataKey,
  fetchSuggestions,
  onBlur,
  onChange,
  onFocus,
  onSelect,
  placeholder,
  staticData,
  customStyles,
}: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<ResultType | string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const getSuggestions = async (query: string) => {
    setError(null);
    setLoading(true);
    try {
      let result: ResultType | string[] = [];
      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch (e) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer: number;
    if (inputValue.length > 1) {
      timer = setTimeout(() => {
        getSuggestions(inputValue);
      }, 400);
    } else {
      setSuggestions([]);
    }
    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">{customLoading}</div>}

      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          <SuggestionList
            datakey={dataKey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={(recipe) => {
              console.log("recipe got", recipe);
              setInputValue(
                dataKey ? recipe[dataKey as keyof typeof recipe] : dataKey
              );
              onSelect(recipe);
              setSuggestions([]);
            }}
          />
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
