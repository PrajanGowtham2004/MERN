import React from 'react'
import { useState } from 'react';

const App = () => {

  let [data,setData] = useState([1,2,3,4,5]);

  return (
    <>
    {data.map((e,i)=>(
      <div key={i+1}>
        <h1>{i+1}</h1>
        <h2>{e}</h2>
      </div>))}
    </>
  )
}

export default App