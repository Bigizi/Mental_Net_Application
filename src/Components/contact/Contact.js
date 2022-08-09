import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container-3">
      <div className="app-wrap1">
        <div>
              <h2 className='title-1'>Contact Us Here</h2>
        </div>
        <form className='form-wrapper'>
            <div className='name-1'>
                <label className='label'>Your Username</label>
                <input className='input-field' type='text' /> 
            </div>
            <div className='textarea'>
                <label className='label'>Leave Your Message Here</label>
                <textarea className='input-textarea' type='text' /> 
            </div>
            <div>
                <button className='submit'>Send</button>
            </div>
        </form>
      </div>
    </div>
  );
}
