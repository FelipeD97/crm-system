import React, { Component } from "react";
import HomeDash from './DashBoardHome';

class Home extends Component {

    render() {
        return (
            <div>
            <HomeDash />
            <Tasks/>
            </div>
        )
    }

}

export default Home;