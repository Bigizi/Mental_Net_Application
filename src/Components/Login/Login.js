import React from 'react';
import './Login.css'
import profile from '../images/profile.jpg'

export default function Login() {
    return(
        <div className='main'>
            
            <div className='sub-main'>
                <div>
                <h1 id='header'>LOGIN</h1>
                    <div className='img'>
                        <div className='container-img'>
                            <img src={profile} alt='profile' className='profile' />
                        </div>
                    </div>
                    <div><br/>
                
                        <div className='first-input'>
                            <input type='text' placeholder='Username' className='name' />
                        </div>

                        <div className='second-input'>
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
        </div>
    )
}
// import { useState } from 'react';

// export default function Login() {
//     const [errorMessages] = useState({});
//     // const [isSubmitted, setIsSubmitted] = useState(false);
//     const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );

//   const handleSubmit = (event) => {
//     // Prevent page reload
//     event.preventDefault();
//   };

//   return (
//     <div className="form">
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <label>Username </label>
//         <input type="text" name="uname" required />
//         {renderErrorMessage("uname")}
//       </div>
//       <div className="input-container">
//         <label>Password </label>
//         <input type="password" name="pass" required />
//         {renderErrorMessage("pass")}
//       </div>
//       <div className="button-container">
//         <input type="submit" />
//       </div>
//     </form>
//   </div>
//   )
// }
