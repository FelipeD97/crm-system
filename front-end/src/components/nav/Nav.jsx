import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeIcon from './images/home-solid.svg'
import Store from './images/store.svg';
import SignIn from './images/signin.svg';
import members from './images/user.svg';


function Nav() {
    return (
      <div className="Nav">
      <nav>
      <ul>
        <li>
          <Link to="/"><img src={HomeIcon}></img></Link>
        </li>
        <li>
          <Link to='/transaction'><img src={SignIn}></img></Link>
        </li>
        <li>
          <Link to='/members'><img src={members}></img></Link>
        </li>
        <li>
          <Link to='/inventory'><img src={Store}></img></Link>
        </li>
      </ul>
    </nav>
      </div>
    );
  }

  export default Nav;