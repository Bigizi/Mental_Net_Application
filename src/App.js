import React from 'react'
import Home from './Components/LandPage/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/SignUp'
import Navbar from './Components/LandPage/Navbar'


export default function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    
    </>
  )
}
