import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeDash from './components/home/DashBoardHome';
import Nav from './components/Nav/Nav';
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



function App() {
  return (
    <div className="App">
      <header>
        <h1>Small Gym CRM</h1>
      </header>
      <AuthProvider>
        <Router>
        <Nav />
          <PrivateRoute path='/' exact component={HomeDash} />
          <PrivateRoute path='/members' component={Members} />
          <PrivateRoute path='/inventory' component={Inventory} />
          <PrivateRoute path="/makesale" component={MakeSale} />
          <PrivateRoute path='/memberprofile/:memberid' component={MemberProfile} />
          <PrivateRoute path='/editMember/:memberid' component={EditMember} />
          <PrivateRoute path='/transaction' component={TransactionHistory} />
          <div>
            <PrivateRoute exact path='/signout' component={Signout}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/' component={Login}/>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
