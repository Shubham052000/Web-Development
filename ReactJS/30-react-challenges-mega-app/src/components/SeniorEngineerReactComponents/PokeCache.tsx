import { useCallback, useEffect, useRef, useState } from "react";
import { ReusableReactDropdown } from "./ReusableReactDropdown";

const API_URL = "https://pokeapi.co/api/v2";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonOption = {
  label: string;
  value: number;
};

type AbilityType = {
  abilities: {
    ability: {
      name: string;
    };
  }[];
};

const PokeCache = () => {
  const [pokemonOptions, setPokemonOptions] = useState<PokemonOption[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(false);

  const [pokemonAbility, setPokemonAbility] = useState<AbilityType | null>(
    null,
  );
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  // Cache promises to avoid duplicate requests
  const cache = useRef<Map<number, Promise<AbilityType>>>(new Map());

  // Prevent stale responses
  const latestRequestId = useRef(0);

  useEffect(() => {
    const fetchPokemonNames = async () => {
      setLoadingOptions(true);

      try {
        const response = await fetch(`${API_URL}/pokemon`);

        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon list.");
        }

        const data = await response.json();

        setPokemonOptions(
          data.results.map((pokemon: Pokemon) => ({
            label: pokemon.name,
            value: Number(pokemon.url.split("/").at(-2)),
          })),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingOptions(false);
      }
    };

    fetchPokemonNames();
  }, []);

  const fetchPokemon = async (id: number): Promise<AbilityType> => {
    if (id <= 0) {
      throw new Error("Invalid Pokémon id.");
    }

    const response = await fetch(`${API_URL}/pokemon/${id}`);

    if (!response.ok) {
      throw new Error(`Unable to fetch Pokémon ${id}`);
    }

    return response.json();
  };

  const getPokemon = (id: number): Promise<AbilityType> => {
    const cached = cache.current.get(id);

    if (cached) {
      return cached;
    }

    const promise = fetchPokemon(id);

    cache.current.set(id, promise);

    return promise;
  };

  const handleSelect = useCallback(async (id: number) => {
    const requestId = ++latestRequestId.current;

    setLoadingPokemon(true);

    try {
      const pokemon = await getPokemon(id);

      // Ignore if a newer request has started
      if (requestId !== latestRequestId.current) {
        return;
      }

      setPokemonAbility(pokemon);
    } catch (error) {
      console.error(error);
    } finally {
      if (requestId === latestRequestId.current) {
        setLoadingPokemon(false);
      }
    }
  }, []);

  return (
    <div>
      <ReusableReactDropdown
        options={pokemonOptions}
        loading={loadingOptions}
        onSelect={handleSelect}
      />

      {loadingPokemon && <p>Loading Pokémon...</p>}

      {!loadingPokemon &&
        pokemonAbility?.abilities.map((ability) => (
          <span key={ability.ability.name} className="mx-4">
            {ability.ability.name}
          </span>
        ))}
    </div>
  );
};

export default PokeCache;
