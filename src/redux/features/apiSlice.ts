import { IPokemon } from "@/interface/pokemon";
import { IPokeapiResponse, IPokemonListItem } from "@/interface/pokemonList";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<
      IPokemonListItem[],
      { limit?: number; page?: number }
    >({
      query: ({ limit = 20, page = 1 }) =>
        `pokemon?limit=${limit}&offset=${(page - 1) * limit}`,
      transformResponse(baseQueryReturnValue: IPokeapiResponse, meta, arg) {
        return baseQueryReturnValue.results;
      },
    }),
    getPokemon: builder.query<IPokemon, { name: string }>({
      query: ({ name }) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = apiSlice;
