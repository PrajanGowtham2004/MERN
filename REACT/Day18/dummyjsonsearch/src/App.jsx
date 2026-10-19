
// import { useState, useEffect } from 'react'

// const App = () => {

//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   const fetchData = async () => {
//     const fetchingData = await fetch('https://jsonplaceholder.typicode.com/users');

//     const fetchsave = await fetchingData.json();
//     setData(fetchsave);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const filteredData = data.filter((e) =>
//     e.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <div className='flex justify-center items-center'>
//         <input
//           type="text"
//           placeholder='Search by name'
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className='border-2 border-black rounded-3xl m-5 p-2'
//         />
//       </div>

//       <div>
//         {filteredData.map((e) => (
//           <div
//             key={e.id}
//             className='border-2 bg-amber-200 rounded-3xl border-black m-5 p-5 flex flex-col items-center justify-center'
//           >
//             <h1 className='font-bold text-xl'>{e.name}</h1>
//             <p>{e.username}</p>
//             <p>{e.email}</p>
//             <p>{e.phone}</p>
//             <p>{e.address.city}</p>
//           </div>
//         ))}

//         {filteredData.length === 0 && (
//           <p className='text-center text-red-500'>
//             No users found
//           </p>
//         )}
//       </div>
//     </>
//   )
// }

// export default App


import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <h1>Count: {count}</h1>;
}
export default App;