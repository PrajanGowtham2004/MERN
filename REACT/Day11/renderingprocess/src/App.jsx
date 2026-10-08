import React, {useState} from 'react'

const App = () => {

  const [mydata,setmydata] = useState([{username:"Prajan",age:22}, {username:"Gowtham",age:22}, {username:"Bala",age:21}])

  const handleclick=()=>{
    const copydata = [...mydata,{username:"Ramesh",age:23}]
    setmydata(copydata)
  }

  const updateclick=()=>{
    const updatedata = [...mydata]
    updatedata[0].username = "Vijay"
    setmydata(updatedata)
  }
    
    

  return (
    <>
   
      {mydata.map((e,i) => (
        <div key={i+1}>
          <h2>{e.username}</h2>
          <p>Age: {e.age}</p>
        </div>
      ))}
      <button onClick={handleclick}>Add Data</button>

      <button onClick={updateclick}>Update Data</button>
    </>
  )
}

export default App