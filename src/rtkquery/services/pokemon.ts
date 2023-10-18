import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const apiUrl = "https://pokeapi.co/api/v2";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: retry(fetchBaseQuery({ baseUrl: `${apiUrl}/` }), {
    maxRetries: 2,
  }),
  keepUnusedDataFor: 10,
  endpoints: (builder) => ({
    getAllPokemons: builder.query<{ pokemons: string[] }, void>({
      query: () => "pokemon",
      transformResponse: (response: { results: { name: string }[] }) => {
        console.log(response);
        return { pokemons: response.results.map((_) => _.name) };
      },
    }),
    getPokemonByName: builder.query<{ id: number; name: string }, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: { name: string; id: number }) => {
        return {
          id: response.id,
          name: response.name,
        };
      },
    }),
  }),
});

export const {
  useGetAllPokemonsQuery,
  useLazyGetAllPokemonsQuery,
  useGetPokemonByNameQuery,
} = pokemonApi;
