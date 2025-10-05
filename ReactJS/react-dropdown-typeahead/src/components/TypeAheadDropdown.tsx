import { useState } from "react";

type OptionType = string[] | { label: string; value: number }[];

const TypeAheadDropdown = ({ options }: { options: OptionType }) => {
  console.log("Options:", options);
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      style={{ position: "relative", width: "200px", boxSizing: "border-box" }}
    >
      <input
        type="text"
        value={inputValue}
        onFocus={() => setIsDropdownExpanded(true)}
        onBlur={() => setIsDropdownExpanded(false)}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: "100%", boxSizing: "border-box" }}
      />
      {isDropdownExpanded && options.length > 0 && (
        <div
          style={{
            border: "1px solid black",
            background: "white",
            position: "absolute",
            top: "100%",
            zIndex: 99,
            borderTop: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {options
            .filter((option) =>
              typeof option === "string"
                ? option.toLowerCase().includes(inputValue.toLowerCase())
                : option.label.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option, index) => (
              <li
                key={index}
                onMouseDown={() => {
                  setInputValue(
                    typeof option === "string" ? option : option.label
                  );
                  setIsDropdownExpanded(false);
                }}
                style={{
                  cursor: "pointer",
                  border: "1px solid gray",
                  listStyle: "none",
                }}
              >
                {typeof option === "string" ? option : option.label}
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default TypeAheadDropdown;
