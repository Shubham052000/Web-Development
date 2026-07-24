/* 
create custom hook and react context implementation implement search debouncing. https://https://rickandmortyapi.com/api/character/?name=ein fetch character details and show them in card view it will have multiple episodes in this with episode id from the below api fetch the names of episodes and render them in the same card https:/rickandmortyapi.com/api/episode/12
*/

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

type Character = {
  id: number;
  name: string;
  image: string;
  episode: string[];
  episodeList: Episode[];
};

type Episode = {
  id: number;
  episode: string;
};

const RickAndMortyContextWithHookAndDebouncing = () => {
  const [inputValue, setInputValue] = useState("");
  const { theme, toggleTheme } = useThemeContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    let timer: number;

    if (inputValue.trim().length > 0) {
      timer = setTimeout(() => {
        console.log("Debounced value received", inputValue);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [inputValue]);

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchEpisodesUsingEpisodeURL = async (url: string) => {
      const resp = await fetch(url);
      if (!resp.ok) throw Error("Problem fetching episode details");
      const data: Episode = await resp.json();
      return data;
    };

    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const resp = await fetch(
          "https://rickandmortyapi.com/api/character/?name=mee",
        );
        if (!resp.ok) {
          throw Error("Problem fetching characters with name query 'ein'");
        }
        const { results }: { results: Character[] } = await resp.json();

        const toSet = await Promise.all(
          results.map(async (item: Character) => {
            const episodeList = await Promise.all(
              item.episode.map((url) => fetchEpisodesUsingEpisodeURL(url)),
            );
            return {
              ...item,
              episodeList,
            };
          }),
        );

        console.log(toSet);
        setCharacters(toSet);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <div id="context-hook-implementation">
        <p>{theme}</p>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
      <div id="debounce-example" className="my-5 w-full text-center">
        <h2>Debounce example</h2>
        <input
          name="debounced"
          type="text"
          onChange={handleChange}
          value={inputValue}
          className="border border-blue-200"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        {!loading && characters.length > 0 ? (
          characters.map((character) => (
            <div
              key={character.id}
              className="w-lg p-8 rounded-full text-center border border-blue-300 my-2"
            >
              <img
                src={character.image}
                alt={character.name}
                className="rounded-full w-3xs mx-auto"
              />
              <h2 className="text-lg">{character.name}</h2>
              {character?.episodeList?.map((episode) => {
                return (
                  <span key={episode.id} className="mx-2">
                    {episode.episode}
                  </span>
                );
              })}
            </div>
          ))
        ) : (
          <span>No results found</span>
        )}
      </div>
    </>
  );
};

export default RickAndMortyContextWithHookAndDebouncing;

type Theme = "light" | "dark";

type ThemeContextType = {
  theme?: Theme;
  toggleTheme?: () => void;
};

const ThemeContext = createContext<ThemeContextType>({});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
};
