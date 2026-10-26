import { useState } from "react"

const App = () => {

  const fetcht_data = async () => {

    let get_datas = await fetch('')
  }

  const [num,setNum]=useState("")

  const [theme,setTheme]=useState(true)
    console.log(theme)

    const handleChange = (e)=>{
      
      setNum(e.target.value)

    }

  return (
    <>
    <div >
      <div className={theme?"bg-blue-500":"bg-red-500"} >
                      hello
      </div>
      <input placeholder="Enter number" onChange={handleChange} />
      <button className="bg-amber-300 p-2 rounded-2xl " onClick={()=>{setTheme((p=>!p))}} >CLICK</button>
      <h1>{num}</h1>
    </div>
    

    </>
  )
}

export default App