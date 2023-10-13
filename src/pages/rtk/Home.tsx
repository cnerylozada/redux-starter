import { useGetPokemonByNameQuery } from "../../rtkquery/services/pokemon";

export const HomePage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  return (
    <div>
      <div>HomePage</div>
      {isLoading && <div>Loading ...</div>}
      <div>
        <div>id: {data?.id}</div>
        <div>name: {data?.name}</div>
      </div>
    </div>
  );
};
