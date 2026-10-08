import {  useState } from 'react'

const ObjUp = () => {

  const [obj,setObj]= useState({name:"Node",number:897878787})
  const [arr,setArr] = useState([])

 const objUpdate = ()=>{

    const copy = {...obj,number:"Node"}



    setObj(copy)

    setArr((prev)=>[...prev,obj])

 }


 const handleClick = (datas)=>{

    const copy = [...arr]
     
   console.log(datas);
   

    const updatearr = copy.map((e,i)=>e.name===datas?{name:"React"}:e)


  console.log(updatearr);
  
    setArr(updatearr)


    



 }

  return (
   <>
   <div className='bg-blue-300 p-10 h-100 flex justify-center items-center'>
     <div className='flex flex-col gap-10 justify-center items-center'>
        <h2 className='bg-amber-50 rounded p-1 shadow-2xl w-20 text-center '>{obj.name}</h2>
        <p className='bg-amber-50 rounded p-1 shadow-2xl w-20 text-center '>{obj.number}</p>
        <button className='bg-black text-white p-1 rounded-2xl w-30' onClick={objUpdate}>Click to update</button>
     </div>
   </div>

   <div className='bg-amber-300 p-10 h-100 flex justify-between items-center'>
    {arr.map((e,i)=>(

        <div key={i+1} className='bg-white flex flex-col gap-4 p-3 rounded-e-2xl shadow-2xl'>
            <h1>{e.name}</h1>
            <h1>{e.number}</h1>
            <button className='bg-black p-1 rounde w-30 text-white' onClick={()=>handleClick(e.name)}>Edit</button>
        </div>

    ))}
   </div>
   </>
  )
}

export default ObjUp







// array showing 
// array add - show - click


// Obj showing: 

// objevt add 

// update