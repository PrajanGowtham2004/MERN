import { useState } from 'react';


const App = () => {

  const [number, setNumber] = useState(0);


  const handleclick = ()=>{setNumber((p) => p + 1)};


  return (
    <>
    <h1>{number}</h1>
    <button onClick={handleclick}>Submit</button>
    </>
  )
}

export default App