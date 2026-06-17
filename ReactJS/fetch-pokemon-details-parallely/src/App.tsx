import "./App.css";
import { usePokemonList } from "./hooks/usePokemonList";

const App = () => {
  const { pokeDetails, loading, error, retry } = usePokemonList();

  return (
    <main id="app-root">
      <div aria-live="polite">
        {loading && <div>Loading...</div>}
        {!loading && error && (
          <div>
            <div>Failed to fetch details: {error}</div>
            <button onClick={retry}>Retry</button>
          </div>
        )}
        {!loading && pokeDetails && pokeDetails.length > 0 && (
          <section aria-label="pokemon-list">
            {pokeDetails.map((poke) => (
              <article key={poke.name} className="card">
                <h2>{poke.name}</h2>
                <ul>
                  {poke.abilities.map((ability) => (
                    <li key={ability}>{ability}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default App;
