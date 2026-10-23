const withAction = (WrappedComponent)=>(props)=>{

    const [msg,setMsg] = useState("")
    
    const handleClick = ()=>{
        if(action=="alert"){

        }

    }


    return <>
    <WrappedComponent {...props}  />

    <h4>{msg}</h4>
    </>

}

export default withAction