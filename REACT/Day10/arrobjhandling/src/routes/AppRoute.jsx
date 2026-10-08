import React from 'react'
import NavBar from '../components/NavBar'
import { Route, Routes } from 'react-router-dom'
import ArrayUp from '../pages/ArrayUp'
import ObjUp from '../pages/ObjUp'
import Toggle from '../pages/Toggle'

const AppRoute = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<ArrayUp/>}/>
        <Route path='/objup' element={<ObjUp/>}/>
        <Route path='/toggle' element={<Toggle/>}/>
    </Routes>
    </>
  )
}

export default AppRoute