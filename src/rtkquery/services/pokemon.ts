import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: { name: string; id: number }) => {
        console.log(response)
        return {
          id: response.id,
          name: response.name,
        };
      },
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
