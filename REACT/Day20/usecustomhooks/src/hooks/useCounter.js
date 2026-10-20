import { useState } from "react"

const useCounter = () => {
    const [count,setCount] = useState(0)

    const increment=()=>{
        setCount(count+10)
    }

    const decrement=()=>{
        setCount(count-10)
    }

    const reset=()=>{
        setCount(0)
    }
  return {count,increment,decrement,reset}
}

export default useCounter