import { useLazyGetAllPokemonsQuery } from "../../rtkquery/services/pokemon";

export const LazyPokemonsPage = () => {
  const [trigger, { data, isLoading, isUninitialized }] =
    useLazyGetAllPokemonsQuery();
  return (
    <div>
      <div>LazyPokemonsPage</div>
      {isUninitialized && (
        <button
          onClick={() => {
            trigger();
          }}
        >
          Fetch all Pokemons
        </button>
      )}

      {isLoading && <div>Loading ...</div>}

      <div>
        {data?.pokemons.length && (
          <div>
            {data.pokemons.map((_) => (
              <div key={_}>{_}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
