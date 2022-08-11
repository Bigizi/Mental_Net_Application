import React from 'react'
import './dashboard.css';
import { BsThreeDots } from "react-icons/bs"
import { BiLike } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"
import sandra from '../images/sandra.jpg'
import rogriguez from '../images/rodriguez.jpg'

export default function Dashboard() {
  return (
    <div className='main-app'>
        <div className='main-left'>
          <p id='para'>Chat Room</p><br/>
          <div className='left-header'>
            <input type='text' placeholder='search' id='left-srch'/>
            <svg className='search-svg' xmlns="http://www.w3.org/2000/svg" height="35" width="35"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>
          </div>
        

        </div>
        <div className='main-middle'>
          
            <div>
              <form className='middle-header'>
                <img src='https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg=w240-h480-rw' alt='' id='img'/>  
                <input type='text' placeholder='What is on your mind?' id='srch'/><button id='post'>POST</button>
              </form>
            </div><br/>
        
            <div  id='maincardHeader'>
                <span><img src={sandra} alt="" /></span>
                <header>
                    <h3>Sandra veronique</h3>
                    <h5>2 hour ago</h5>
                </header>
                
                <span id='maincardIcon'><BsThreeDots/></span>
            </div>
            <div id='maincardPost'>
               <p>“I need your help guys every day I feel stressed I can't sleep, Excessive fears or worries<br/>Significant tiredness, low energy or problems sleeping,<br/>Confused thinking or reduced ability to concentrate”</p>
            </div>
            <div id='maincardLike'>
              <span><BiLike/>&nbsp;&nbsp;80 likes</span>
              <span><FaRegComment/>&nbsp;&nbsp;98 comments</span>
            </div>
            <div id='maincardUserComment'>
            <span><img src={sandra} alt="" /></span>
            <input type="text" placeholder='Write your comment'/>
        </div>
        <div id='maincardComment'>
            <span><img src={rogriguez} alt="" /></span>
            <div id='comment-header'>
              <header>
                <h3>Rogriguez</h3>
                <h4>5 min ago</h4>
              </header>  
                <p>“You have to drink water and do some sports”</p>
            </div>   
        </div><br/>
        <div id='maincardLoadComment'>
            <button>view All Comments</button>
        </div>
        </div>
        <div className='main-right'>
          <div className='right-header'>
            <img id='right-img' src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='' />
            <span>Alexis Derick</span>
          </div>
        </div>
    </div>
  );
}
