import React from 'react'
import './forget.css'

export default function Forget() {
  return (
    <div className='container-3'>
        <div className='app-wrap'>
           <div>
              <h2 className='title'>Reset Your Password</h2>
            </div>
            <form className='form-wrapper'>
            <div className='password'>
                <label className='label'>New Password</label>
                <input className='input-field' type='password' /> 
            </div>
            <div className='password'>
                <label className='label'>Confirm Password</label>
                <input className='input-field' type='password' /> 
            </div>
            <div>
                <button className='submit'>Reset</button>
            </div>
            </form>
        </div>
    </div>
  )
}

