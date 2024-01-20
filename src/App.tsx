import React from 'react';
import type { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './features/counter/counter-slice';
import { useGetPokemonByNameQuery } from "./features/pokemons/pokemon-api-slice"




interface AppProps { }

const App: React.FC<AppProps> = () => {

  const { data, isLoading, error } = useGetPokemonByNameQuery("")

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <h1>Amount: {count}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment By Amount</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <h1>Counts: {data?.count}</h1>

      {
        data?.results?.map((result: any) => (
          <div key={result.name}>
            <p>{result.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;