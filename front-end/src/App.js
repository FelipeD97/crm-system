import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeDash from './components/home/DashBoardHome';
import Nav from './components/Nav/Nav';
import Members from './components/members/members';
import MakeSale from "./components/inventory/store";
import MemberProfile from './components/members/MemberProfile';
import AuthProvider from './components/login/auth';
import PrivateRoute from './components/login/privateroute';
import SignUp from './components/login/sign-up';
import Login from './components/login/login.jsx';
import Signout from './components/login/signout';
import EditMember from './components/members/editMember';
import TransactionHistory from './components/inventory/transactionHistory';
import AddItem from './components/inventory/addItem';
import Tasks from './components/home/tasks';
import InventoryList from "./components/inventory/inventoryList";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Kuzushi from './images/Kuzushi.png';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <div className="Header">
        <img src={Kuzushi}></img>
        <h1>Kuzushi Club</h1>
        <PrivateRoute path='/' component={Signout}/>
          
        </div>
      <div className="App">
          <div className="Nav">
            <Nav />
          </div>
            <div className="dash">
              <PrivateRoute path='/' exact component={HomeDash} />
              <PrivateRoute path='/members' component={Members} />
              <PrivateRoute path='/inventoryList' component={InventoryList} />
              <PrivateRoute path="/makesale" component={MakeSale} />
              <PrivateRoute path='/memberprofile/:memberid' component={MemberProfile} />
              <PrivateRoute path='/editMember/:memberid' component={EditMember} />
              <PrivateRoute path='/transaction' component={TransactionHistory} />
              <PrivateRoute path='/additem' component={AddItem}/>
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/' component={Login}/>
              <Route exact path='/signout' component={Tasks}/>


            </div>
          </div>
        </Router>
      </AuthProvider>
      <div className="Footer--Container">
        <div className="Footer--Content">
        <MailOutlineIcon />
        <HelpOutlineIcon />
        </div>
      </div>
      </>
  );
}

export default App;
