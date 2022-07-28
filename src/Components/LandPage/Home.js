import React, { useState } from 'react'
import Login from '../Login/Login';
import SignUp from '../Signup/SignUp';
import './home.css';
import Navbar from './Navbar';


export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
  
    <div className='container'>
      <Navbar onClick={_=>setShowLoginForm(true)} />
      {/* <SignUp /> */}
        
        {
          !showLoginForm ? null : <Login />
          
        }
        {
          !showLoginForm ? null : <SignUp />
          
        }
        

        
        <p className='description'>We do care about your mental health</p>
        <div className='body'>
            <div className='left-text'>
             <h>Good news:</h><br/><br/>
             <p>Positive mental health allows people to: <br/> Realize ntheir full potential. <br/> 
             Cope with stresses of life.<br/> Work productively. <br/> Make meaningfull contribution to their communities.
             </p>
            </div>
         
            <div className='right-text'>
              <h>Bad news:</h><br/><br/>
              <p>Unhappiness and decreased enjoyment of life.<br/> Family conflicts.<br/> Relationship difficulties.<br/>
              Social isolation.<br/> Problems with tobacco and alcohol and other drugs.<br/>
              Legal and financial problems.
              </p>
            </div> 
      </div> 
    </div>
  )
}
