import UseContext from "../context/UseContext"
import { useState } from "react"



const UseProvider = ({children}) => {

    const [theme,setTheme] = useState(0)

    const handleThemeChange = ()=>{
        setTheme((p)=>p+1)
    }

  return (
    
    <>
    <UseContext.Provider value={{handleThemeChange, theme}} >
        {children}
    </UseContext.Provider >
    
    </>
  )
}

export default UseProvider