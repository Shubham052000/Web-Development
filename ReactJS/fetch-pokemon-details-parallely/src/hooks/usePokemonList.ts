import { useEffect, useState } from "react";

export type PokemonDetail = {
  name: string;
  abilities: string[];
};

export const usePokemonList = () => {
  const [pokeDetails, setPokeDetails] = useState<PokemonDetail[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPokeDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
          signal,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { results } = await response.json();

        // Fetch each pokemon detail but do not fail the whole batch if one fails.
        const promises = results.map(async (poke: { url: string }) => {
          try {
            const res = await fetch(poke.url, { signal });
            if (!res.ok) {
              console.error(`Failed to fetch ${poke.url}: ${res.status}`);
              return null;
            }
            const { name, abilities } = await res.json();
            return {
              name,
              abilities: abilities.map(
                (ab: { ability: { name: string } }) => ab.ability.name,
              ),
            } as PokemonDetail;
          } catch (err: any) {
            if (err.name === "AbortError") {
              throw err;
            }
            console.error(`Error fetching detail for ${poke.url}:`, err);
            return null;
          }
        });

        const details = (await Promise.all(promises)).filter(
          Boolean,
        ) as PokemonDetail[];

        if (details.length === 0) {
          setError("Failed to fetch Pokémon details");
          setPokeDetails(null);
        } else {
          setPokeDetails(details);
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          return;
        }
        console.error("Error fetching Pokémon details:", err);
        setError(String(err?.message ?? err));
        setPokeDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokeDetails();

    return () => controller.abort();
  }, [retryCount]);

  return {
    pokeDetails,
    loading,
    error,
    retry: () => setRetryCount((c) => c + 1),
  };
};
