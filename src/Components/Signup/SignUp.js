import React from "react";
import './signup.css';

export default function SignUp() {
    return(
        <div className="container-1">
            <div className="sub-container-1">

             <form className="form">  
               
                 <div>
                   <h1 id='head'>CREATE ACCOUNT NOW</h1>
                 </div><br/>
               
                <div>
                    <div>
                    <input type='text' className='username' placeholder="Username"/>
                    </div><br/>

                    <div> <input type='text' className='email' placeholder="Your Email"/></div><br/>
                     
                    <div>
                    <input type='text' className='phone_n' placeholder="Phone number" />
                    </div><br/>

                    <div>
                    <input type='password' className='password' placeholder="Your Password"/>
                    </div><br/>

                    <div>
                    <input type='password' className='password' placeholder="Confirm password"/>
                    </div><br/>
                </div>  
                <div>
                    <div>
                    <button className="btn-1">Sign up</button>
                    </div>
                    <div>
                    <p className="links">Already have an account ?</p><a href='#'>Login</a>
                    </div>
                </div>
              </form>      
            </div>
        </div>
        
    )
}