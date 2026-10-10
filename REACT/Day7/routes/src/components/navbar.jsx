import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-blue-500 text-white flex justify-between p-4">
      <div className="rounded-full bg-white text-blue-500 font-bold text-xl p-2">LOGO</div>
      <div className="flex space-x-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>

      </div>
    </div>
    </>
  )
}

export default NavBar