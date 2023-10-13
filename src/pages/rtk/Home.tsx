import { useGetAllPokemonsQuery } from "../../rtkquery/services/pokemon";

export const HomePage = () => {
  const { data, error, isLoading } = useGetAllPokemonsQuery();
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div>
      <div>HomePage</div>
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
