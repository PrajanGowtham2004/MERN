import { useState } from "react"
import Navbar from "../components/NavBar"


const Toggle = () => {
  
    const [toggle,setToggle] = useState(true)
 
  const handleClick = ()=>{

   setToggle(!toggle)

  }



  return (
    <>
    <Navbar   toggledata = {toggle}  />
    <div className="bg-purple-600 h-100 text-white p-10 ">
        <div>
            <button onClick={handleClick} className={toggle?"bg-white p-2 rounded text-black w-30 text-center shadow-2xl my-5":"bg-black p-2 rounded text-white w-30 text-center shadow-2xl my-5"}>Click to Toggle</button>
        </div>

        {toggle&&<div className="bg-white p-5 text-black rounded shadow-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo numquam quidem. Alias praesentium repellat, labore sequi, cum, harum deserunt perferendis quis repellendus voluptates dolores. Nobis ratione pariatur quam totam.
        </div>}
        
    </div>
    </>
  )
}

export default Toggle