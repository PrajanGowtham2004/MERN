import { useState } from "react"


const ArrayUp = () => {

//  const [singleData,setSinglData] = useState(789)   

 const [arr,setArr] = useState(["React","java","Node","JS"])

 const updateArr = (datas)=>{
     
    const copy = [...arr,singleData]

    // const updatearr = copy.map((e)=>e===datas?"React Updated Value":e)

    setArr(copy)

    // setArr((p)=>[...p].map((e)=>e===datas?"Updated":e))

//    setArr((prev)=>[...prev,"Python"])
    

 }

  return (
    <>
    <div className='bg-green-400 p-10 flex justify-center items-center h-100'>
        <div className="flex flex-col gap-5 items-center">
            {arr.map((e,i)=>(
           
           <h1 className="bg-amber-300 p-1 w-30 text-center rounded" key={i+1}>{e}</h1>



          ))}
          
          <button className="bg-black p-1 rounded-2xl w-30 text-center text-white" onClick={()=>updateArr("java")}>Update Array</button>
        </div>
    </div>
    </>
  )
}

export default ArrayUp