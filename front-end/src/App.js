import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeDash from './components/home/DashBoardHome';
import Nav from './components/nav/Nav';
import Members from './components/members/members';
import Inventory from './components/inventory/inventory';
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

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <div className="Header">
          <div className="titleContainer">
            CRM
          </div>
          <PrivateRoute path='/' component={Signout}/>
        </div>
      <div className="App">
          <div className="Nav">
            <Nav />
          </div>
            <div className="dash">
              <PrivateRoute path='/' exact component={HomeDash} />
              <PrivateRoute path='/members' component={Members} />
              <PrivateRoute path='/inventory' component={Inventory} />
              <PrivateRoute path="/makesale" component={MakeSale} />
              <PrivateRoute path='/memberprofile/:memberid' component={MemberProfile} />
              <PrivateRoute path='/editMember/:memberid' component={EditMember} />
              <PrivateRoute path='/transaction' component={TransactionHistory} />
              <PrivateRoute path='/additem' component={AddItem}/>
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/' component={Login}/>
            </div>
          </div>
        </Router>
      </AuthProvider>
      <div className="Footer">
        <p>Footer</p>
      </div>
      </>
  );
}

export default App;
