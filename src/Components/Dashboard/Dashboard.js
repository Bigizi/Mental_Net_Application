import React from "react";
import "./dashboard.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike, BiSearch } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import sandra from "../images/sandra.jpg";
import rogriguez from "../images/rodriguez.jpg";

export default function Dashboard() {
  return (
    <div className="main-app">
      <div className="main-left">
        {/* <p id="para">Chat Room</p> */}
        <br />
        <div className="left-header">
          <input type="text" placeholder="Search for user" id="left-srch" />
          <BiSearch size={25}/>
        </div>
        <br/>
        <hr/>
        <div className="hold-users">
        <div id="maincardComment">
          <span>
            <img src={rogriguez} alt="" />
          </span>
          <div id="comment-header">
            <header>
              <h3>Crispin</h3>
              <h4>Therapist</h4>
            </header>
          </div>
        </div>
        <div id="maincardComment">
          <span>
            <img src={rogriguez} alt="" />
          </span>
          <div id="comment-header">
            <header>
              <h3>Rogriguez</h3>
              <h4>Youth</h4>
            </header>
          </div>
        </div>
        <div id="maincardComment">
          <span>
            <img src={rogriguez} alt="" />
          </span>
          <div id="comment-header">
            <header>
              <h3>Kagabo</h3>
              <h4>Therapist</h4>
            </header>
          </div>
        </div>
        <div id="maincardComment">
          <span>
            <img src={rogriguez} alt="" />
          </span>
          <div id="comment-header">
            <header>
              <h3>Rogriguez</h3>
              <h4>Youth</h4>
            </header>
          </div>
        </div>
        </div>

      </div>
      <div className="main-middle">
        <div>
          <form className="middle-header">
            <img
              src="https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg=w240-h480-rw"
              alt=""
              id="img"
            />
            <input type="text" placeholder="What is on your mind?" id="srch" />
            <button id="post">POST</button>
          </form>
        </div>
        <br />

        <div id="maincardHeader">
          <span>
            <img src={sandra} alt="" />
          </span>
          <header>
            <h3>Sandra veronique</h3>
            <h5>2 hrs ago</h5>
          </header>

          <span id="maincardIcon">
            <BsThreeDots />
          </span>
        </div>
        <div id="maincardPost">
          <p>
            “I need your help guys every day I feel stressed I can't sleep,
            Excessive fears or worries
            <br />
            Significant tiredness, low energy or problems sleeping,
            <br />
            Confused thinking or reduced ability to concentrate”
          </p>
        </div>
        <div id="maincardLike">
          <span>
            <BiLike />
            &nbsp;&nbsp;80 likes
          </span>
          <span>
            <FaRegComment />
            &nbsp;&nbsp;98 comments
          </span>
        </div>
        <div id="maincardUserComment">
          <span>
            <img src={sandra} alt="" />
          </span>
          <input type="text" placeholder="Write your comment" />
        </div>
        <div id="maincardComment">
          <span>
            <img src={rogriguez} alt="" />
          </span>
          <div id="comment-header">
            <header>
              <h3>Rogriguez</h3>
              <h4>5 min ago</h4>
            </header>
            <p>You have to drink water and do some physical exercises</p>
          </div>
        </div>
        <br />
        <div id="maincardLoadComment">
          <button>view All Comments</button>
        </div>
      </div>
      <div className="main-right">
        <div className="right-header">
          <img
            id="right-img"
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt=""
          />
          <span>Alexis Derick</span>
        </div>
      </div>
    </div>
  );
}
