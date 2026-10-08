
import { Link } from 'react-router-dom'

const NavBar = ({toggledata}) => {

    console.log(toggledata);
    
  return (
    <>
    <div className={toggledata?'bg-blue-500 p-3 text-white flex justify-between items-center':'bg-black p-3 text-white flex justify-between items-center'}>
        <div className='mx-15'>
            <p>Rendering</p>
        </div>
        <div className='mx-15 flex gap-15'>
        <Link to={"/"}>Array Update</Link>
        <Link to={"/objup"}>Object Update</Link>
        <Link to={"/toggle"}>Toggle Boolean Process</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar