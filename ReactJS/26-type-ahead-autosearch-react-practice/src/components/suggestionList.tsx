import { Recipe, ResultType } from "./autocomplete";

type SuggestionListProps = {
  suggestions: ResultType | string[];
  highlight: string;
  datakey: string;
  onSuggestionClick: (suggestion: Recipe | string) => void;
};

const SuggestionList = ({
  suggestions,
  highlight,
  datakey,
  onSuggestionClick,
}: SuggestionListProps): JSX.Element => {
  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) => {
          if (part.toLowerCase() === highlight.toLowerCase()) {
            return <strong key={index}>{part}</strong>;
          } else {
            return <span key={index}>{part}</span>;
          }
        })}
      </span>
    );
  };
  return (
    <>
      {suggestions.map((suggestion, index) => {
        const currSuggestion = datakey
          ? suggestion[datakey as keyof typeof suggestion]
          : suggestion;

        return (
          <li
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestion-item"
          >
            {getHighlightedText(currSuggestion as string, highlight)}
          </li>
        );
      })}
    </>
  );
};

export default SuggestionList;
