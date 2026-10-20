
import useCounter from './hooks/useCounter'

const App = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment} >Increase</button>
    <button onClick={decrement}>Decrease</button>
    <button onClick={reset} >Reset</button>
    </>
  )
}

export default App