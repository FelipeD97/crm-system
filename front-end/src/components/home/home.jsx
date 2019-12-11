import React, { Component } from "react";
import Login from './login';
import { Link } from 'react-router-dom';
import HomeDash from './DashBoardHome';

class Home extends Component {

    render() {
        return (
            <div>
            <HomeDash />
            </div>
        )
    }

}

export default Home;