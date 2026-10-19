import { useState } from 'react'

const App = () => {

  const [data, setData] = useState("")
  const [clickdata,setClickData] = useState([])

  const handleChange = (e) => {
    setData(e.target.value)
    
   }


   const handleClick = () => {

    setClickData((p)=>([...p,data]))
    setData("")

   }

   const handleEdit= (edit)=>{
    setData(edit)

   }

   const handleDelete = (index)=>{
    const copy = [...clickdata]
    const deleteddata = copy.filter((e,i)=>i!==index)
    setClickData(deleteddata)
   }
  
  

  return (
    <>
    

    <input type="text" value={data} placeholder="Enter data here" onChange={handleChange} />
    <button onClick={handleClick}>Click Me</button>

    {clickdata.map((e,i)=>(
      <div key={i}>
        <h4 className="text-3xl text-red-900">{i+1}</h4>
        <p className="text-2xl text-amber-400">{e}</p>
        <button className="btn btn-primary rounded-xl w-50 border-2  bg-blue-300" onClick={()=>{handleEdit(e)}} >Edit</button>
        <button className="btn btn-danger rounded-xl w-50 border-2 bg-red-500" onClick={()=>{handleDelete(i)}}>Delete</button>
      </div>
    ))}
    </>
  )
}

export default App