import { useGetPokemonByNameQuery } from "../../rtkquery/services/pokemon";

export const HomePage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  console.log("data", data)
  return (
    <div>
      <div>HomePage</div>
    </div>
  );
};
