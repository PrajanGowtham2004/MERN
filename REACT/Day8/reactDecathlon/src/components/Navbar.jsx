import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mens">Mens</NavLink>
            <NavLink to="/womens">Womens</NavLink>
            <NavLink to="/kids">Kids</NavLink>
            <NavLink to="/allsports">All Sports</NavLink>
        </div>
        <div>
            <p>Delivery to Bangalore Central, Bangalore, 560001, Karnataka</p>
        </div>
    </div>
    </>
  )
}

export default Navbar