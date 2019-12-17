import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { ListItem } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
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
          <Link to='/members'><PeopleAltIcon fontSize='large'/></Link>
        </ListItem>
        <ListItem>
          <Link to='/inventory'><AttachMoneyIcon fontSize='large' color='secondary'/></Link>
        </ListItem>
        <ListItem>
          <Link to='/transaction'><AccountBalanceIcon fontSize='large' /></Link>
        </ListItem>
      </ul>
    </nav>
      </div>
    );
  }

  export default Nav;