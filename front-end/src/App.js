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


function App() {
  return (
    <div className="App">
    <header>
      <h1>Small Gym CRM</h1>
    </header>
    <Router>
      <Nav />
      <Route path='/' exact component={HomeDash} />
      <Route path='/members' component={Members} />
      <Route path='/inventory' component={Inventory} />
      <Route path="/makesale" component={MakeSale} />
      <Route path='/memberprofile/:memberid' component={MemberProfile} />
      <Route path='/editMember/:memberid' component={EditMember} />
    
      <AuthProvider>
        <Router>
       <div>
      <PrivateRoute exact path='/signout' component={Signout}/>
      <Route exact path='/signup' component={SignUp}/>
      
      <Route exact path='/login' component={Login}/>
      </div>
      </Router>
      </AuthProvider>

    </Router>
    </div>
  );
}

export default App;
