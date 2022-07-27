import React, { useState } from 'react'
import Login from '../Login/Login';
import './home.css';
import Navbar from './Navbar';
// import main from '../images/profile.png'
// import SignUp from '../Signup/SignUp';


export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
  
    <div className='container'>
    {/* <img src='main' alt='' className='img' /> */}
      <Navbar onLoginClick={_=>setShowLoginForm(true)} />
        
        {
          !showLoginForm ? null : <Login  />
        }

        
        <p className='description'>We do care about your mental health</p>
        <div className='body'>
            <div className='left-text'>
             <h>Good news</h><br/>
             <p>Positive mental health allows people to: <br/> Realize ntheir full potential. <br/> 
             Cope with stresses of life.<br/> Work productively. <br/> Make meaningfull contribution to their communities.
             </p>
            </div>
         
            <div className='right-text'>
              <h>Bad news</h><br/>
              <p>Unhappiness and decreased enjoyment of life.<br/> Family conflicts.<br/> Relationship difficulties.<br/>
              Social isolation.<br/> Problems with tobacco and alcohol and other drugs.<br/>
              Legal and financial problems.
              </p>
            </div> 
        </div>
        {/* <SignUp /> */}
        
    </div>
  )
}
