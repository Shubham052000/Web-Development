import "./App.css";
import AutoComplete from "./components/autocomplete";

const staticData = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "orange",
  "pear",
];

function App() {
  const fetchSuggestions = async (query: string) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };
  return (
    <div>
      <h1>Autocomplete/ Typeahead</h1>

      <AutoComplete
        placeholder={"Enter Recipe..."}
        // staticData={staticData}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={<>Loading Recipes...</>}
        onSelect={(res: any) => {
          console.log(res);
        }}
        onChange={(input: string) => {}}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {}}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {}}
        customStyles={{}}
      />
    </div>
  );
}

export default App;
