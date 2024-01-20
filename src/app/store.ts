import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice"
import { pokemonApi } from "../features/pokemons/pokemon-api-slice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokemonApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;