
// import useCounter from './hooks/useCounter'

// const App = () => {
//   const { count, increment, decrement, reset } = useCounter();

//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increment} >Increase</button>
//     <button onClick={decrement}>Decrease</button>
//     <button onClick={reset} >Reset</button>
//     </>
//   )
// }

// export default App






import { useRef } from "react";

const App = () => {
  const showRef = useRef(null);

  const handleClick = () => {
    console.log(showRef.current)
    showRef.current.innerHTML = "Hi, I'm Prajan";
  };

  return (
    <>
    <button onClick={handleClick}>Show U</button>
    <h2 ref={showRef}></h2>
    </>
  );
}

export default App
