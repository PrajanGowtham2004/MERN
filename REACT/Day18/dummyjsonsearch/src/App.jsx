import { useState, useEffect } from 'react'

const App = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fetchingData = await fetch('https://dummyjson.com/products');

    const fetchsave = await fetchingData.json();
    setData(fetchsave.products);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
    <div className='flex justify-center items-center '>
      <input type="text" placeholder='search' onChange={(e) => setData(e.target.value)} className='border-2 border-black rounded-3xl m-5 p-2' />
    </div>
    <div className=''>
      {data.map((e) => (
        <div key={e.id} className=' border-2 bg-amber-200 rounded-3xl border-black m-5 p-5 flex flex-col items-center justify-center'>
          <h1>{e.title}</h1>
          <img src={e.thumbnail} alt={e.title} className='w-40 h-40' /> 
          <p>{e.description}</p>
          <p>{e.price}</p>
        </div>
      ))}
    </div>
    
    
    </>
  )
}

export default App