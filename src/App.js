import React from 'react'
// import Home from './Components/LandPage/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/SignUp'
import Navbar from './Components/Navigation/Navbar'
import Forget from './Components/Forget/Forget'
import Contact from './Components/contact/Contact'
import Landing from './Components/LandPage/Landing'
import Dashboard from './Components/Navigation/Dashboard/Dashboard'


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/forget' element={<Forget/>} />
      <Route path='/contactus' element={<Dashboard/>}/>
    </Routes>
    
    </>
  )
}
