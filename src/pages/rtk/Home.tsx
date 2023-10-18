import { useGetAllPokemonsQuery } from "../../rtkquery/services/pokemon";

export const HomePage = () => {
  const { data, isLoading, isFetching, isError } = useGetAllPokemonsQuery();
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div>
      <div>HomePage</div>
      {(isLoading || isFetching) && <div>Loading ...</div>}
      {isError && <div>Error</div>}

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
