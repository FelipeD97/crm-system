import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Store from './images/store.svg';
import SignIn from './images/signin.svg';
import members from './images/user.svg';
import { AppBar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { ListItem } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ListIcon from '@material-ui/icons/List';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';




function Nav() {
    return (
      
      <div>
      <nav>
      <ul>
        <ListItem>
          <Link to="/"><HomeIcon fontSize='large'color="secondary" /></Link>
        </ListItem>
        <ListItem>
          <Link to='/transaction'><AccountBalanceIcon fontSize='large' color='secondary'/></Link>
        </ListItem>
        <ListItem>
          <Link to='/members'><PeopleAltIcon fontSize='large'/></Link>
        </ListItem>
        <ListItem>
          <Link to='/inventory'><AttachMoneyIcon fontSize='large'/></Link>
        </ListItem>
      </ul>
    </nav>
      </div>
    );
  }

  export default Nav;