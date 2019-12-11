import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/home/login';
import HomeDash from './components/home/DashBoardHome';
import Nav from './components/nav/Nav'
import Members from './components/members/members';
import Inventory from './components/inventory/inventory'


function App() {
  return (
    <div className="App">
    <header>
      <h1>Small Gym CRM</h1>
    </header>
    <Router>
      <Nav />
      <Route path='/' exact component={HomeDash} />
      <Route path='/login' component={Login} />
      <Route path='/members' component={Members} />
      <Route path='/inventory' component={Inventory} />

    </Router>
    </div>
  );
}

export default App;
