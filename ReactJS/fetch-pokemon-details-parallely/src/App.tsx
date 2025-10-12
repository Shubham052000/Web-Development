import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [pokeDetails, setPokeDetails] = useState<
    { name: string; abilities: string[] }[] | null
  >(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokeDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { results } = await response.json();
        const details = await Promise.all(
          results.map(async (poke: { url: string }) => {
            const res = await fetch(poke.url);

            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            const { name, abilities } = await res.json();

            return {
              name,
              abilities: abilities.map(
                (ab: { ability: { name: string } }) => ab.ability.name
              ),
            };
          })
        );
        setPokeDetails(details);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
        setPokeDetails(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPokeDetails();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !pokeDetails && <div>Failed to fetch details</div>}
      {!loading &&
        pokeDetails &&
        pokeDetails.length > 0 &&
        pokeDetails.map((poke) => (
          <div key={poke.name}>
            <h2>{poke.name}</h2>
            <ul>
              {poke.abilities.map((ability) => (
                <li key={ability}>{ability}</li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default App;
