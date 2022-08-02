import React from 'react';
import './Login.css'
import profile from '../images/profile.jpg'

export default function Login() {
    return(
    <div className='main'>
        <form>
        <div className='sub-main'>
            <div className='All-in'>
                        <h1 id='header'>LOGIN</h1>
                    <div className='img'>
                        <div className='container-img'>
                            <img src={profile} alt='profile' className='profile' />
                        </div>
                    </div>
                    <div className='frm'><br/>
                
                        <div className='Login-input'>
                            <input type='text' placeholder='Username' className='name' />
                        </div>

                        <div className='Login-input'>
                            <input type='password' placeholder='Password' className='pass' />
                        </div>

                        <div className='login-btn'>
                        <button>Login</button>
                        </div>
                            <p className='link'>
                                <a href='#'>Forget Password ?</a> or <a href='#'>Sign up</a>
                            </p>
                    </div>
            </div>
        </div>
        </form>
    </div>
    )
}
