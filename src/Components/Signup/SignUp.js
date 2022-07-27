import React from "react";
import './signup.css';

export default function SignUp() {
    return(
        <div className="container">
            <div className="sub-container">
                <div className="inputs">
                    <label>Username:</label>
                    <input type='text' className='name'/><br/>

                    <label>Password:</label>
                    <input type='password' className='pass'/><br/>

                    <label>Confirm Password:</label>
                    <input type='password' className='pass'/><br/>

                    <label>Email:</label>
                    <input type='text' className='email'/><br/>

                    <label>Telephone:</label>
                    <input type='number' className='phone_n' /><br/>
                </div>
            </div>
        </div>
    )
}

