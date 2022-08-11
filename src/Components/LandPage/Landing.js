import React from 'react'
import './Landing.css'
import person from '../images/person.jpg'
import happy from '../images/happy.jpg'
import logo from '../images/logo-middle.jpg'


export default function Landing() {
  return (
    <div className='container-landing'>
        <div className='sub-container-landing'>
          <div className='body'>
            <div id='empty'>
              
              </div>
              
            <div className='body-title'>
              <p id='body-para'>Live A Life That Is <br/>Full Of Joy And <br/> Happiness </p><br/>
              <button id='body-btn'>Read More</button>
            </div>  
            <div>
                   <img src={person} alt='' className='image'/>
            </div>
            </div>
            <div className='About-us'>
              <div>
              <h2 id='about-us-h'>Who We Are</h2><br/>
                <p>Today the world is facing a lot of problems which are leading the youth to depression,<br/>
                  suiside and many other tragedies that's why Mental Net has come to help those who<br/> are  in need
                  of council and have no hope to reconnect and feel their worthiness is life.
                </p>
                </div>
              <div>
                <img src={logo} alt='' className='logo-middle'/>
              </div>
            </div><br/>
            <section className='middle-section'>
                  <h id='middle-section-h'>OUR MISSION</h><br/>
                  <div className='middle-section-min'>
                  <div>
                    <img src={happy} alt=''className='middle-section-img'/>
                  </div>
                  <div className='middle-section-txt'>
                    <h id='middle-h'>IT TAKES A GENERATION TO TRANSFORM A GENERATION</h>
                    <p><br/>
                      Through healing, sharing ideas and love, <br/>Mental net empowers youth and elder people to build
                      lives <br/>of dignity and contribute to a better world
                    </p>
                  </div>
                  </div>
            </section>
            <section className='footer-container'>
                <div className='mental'>
                  <h2 id='mental-h'>Why Mental Healthy?</h2><br/>
                  <p>
                    You feel good about yourself<br/> You do not become overwhelmed by emotions, such as fear, anger, love, jealousy, guilt, or anxiety<br/>You feel comfortable with other people<br/>You  are able to accept life’s disappointments<br/>You make your own decisions
                  </p>
                </div>
                <div className='footer'>
                  <h2 id='footer-h'>How we Accomplish our mission</h2><br/>
                  <p>The way and strategies to accomplish this mission is simple as make it simple for you.<br/>
                    You only need to sign up and have an account to this platform and start chatting with other people<br/>
                    Most especially you will meet the psychologists to answer all the questions you may have
                  </p>
                </div>
            </section>
        </div>
    </div>
  )
}
