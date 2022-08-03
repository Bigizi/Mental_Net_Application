import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return(
    <div className='container-3'>
        <div className='app-wrapper-1'>
           <div>
              <h2 className='title'>Login</h2>
            </div>
            <form className='form-wrapper'>
            <div className='name-1'>
                <label className='label'>Username</label>
                <input className='input-field' type='text' /> 
            </div>
            <div className='password'>
                <label className='label'>Password</label>
                <input className='input-field' type='password' /> 
            </div>
            <div>
                <button className='submit'>Login</button>
            </div><br/>
            <p className='paragraph'>Don't have an account?   <Link to='/signup'>Create Account</Link></p>
            <p className='paragraph'><Link to='/forget'>Forgot Password?</Link></p>
            </form>
                     
        </div>
    </div>
    )
}