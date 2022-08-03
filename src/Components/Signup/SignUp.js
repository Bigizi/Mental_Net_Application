import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css'

function SignUp() {
  return (
    <div className='container-3'>
        <div className='app-wrapper'>
            <div>
            <h2 className='title'>Create Account</h2>
            </div>
        
        <form className='form-wrapper'>
            
            <div className='name-1'>
                <label className='label'>Full Name</label>
                <input className='input-field' type='text' /> 
            </div>
            <div className='email'>
                <label className='label'>Email</label>
                <input className='input-field' type='email' /> 
            </div>
            <div className='phone'>
                <label className='label'>Phone Number</label>
                <input className='input-field' type='text' /> 
            </div>
            <div className='password'>
                <label className='label'>Password</label>
                <input className='input-field' type='password' /> 
            </div>
            <div className='password'>
                <label className='label'>Confirm Password</label>
                <input className='input-field' type='password' /> 
            </div>
            <div>
                <button className='submit'>Sign Up</button>
            </div><br/>
            <p className='paragraph'>Already have account?   <Link to='/login'>Login</Link> </p>
        </form>
     </div>
    </div>
  )
}

export default SignUp;