import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Heroes } from '../../types/pokemon-types'


export const pokemonApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Heroes, string>({
            query: (name) => `pokemon/${name}`
        }),
    })
})

export const { useGetPokemonByNameQuery } = pokemonApi;