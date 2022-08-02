import React from 'react'
import Home from './Components/LandPage/Home'
import './App.css'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/SignUp'
import Navbar from './Components/LandPage/Navbar'
import{Routes,Route} from 'react-router-dom';
export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  )
}
