import React, { Component } from "react";
import { loadData } from "../../utils/loadData";
import Kuzushi from '../../images/Kuzushi.png'
import { Paper } from '@material-ui/core';
import Jits from '../../images/jits.png'



class Tasks extends Component {
    state = {
        tasks: []
    }

    async componentDidMount() {
        const data = await loadData(`http://localhost:3333/tasks`);
        const tasks = data;

        this.setState ({
            tasks
        })
    }

    render() {
        const { tasks } = this.state;
        return (
            <>
            <div className="Home--Container">
            <Paper className="Paper">
                <h1 className="HomeTitle">Welcome to Kuzushi Solutions</h1>
                </Paper>
                <div className="homeImages">
                <img src={Kuzushi}></img>
                <img src={Jits}></img>
                </div>
                </div>
                <style jsx>
                    {`
                        .Paper {
                            display: flex;
                            text-align: center;
                            justify-content: center;
                            background-color: grey;
                            width: 100%;
                        }
                        .HomeTitle {
                            display: flex;
                            justify-content: center;
                            font: 32px bold;
                            font-weight: bold;
                            text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                            0px 8px 13px rgba(0,0,0,0.1),
                            0px 18px 23px rgba(0,0,0,0.1);
                            
                        }
                        .homeImages {
                            display: flex;
                            flex-direction: row;
                            align-items: center
                            justify-content: space-around;
                            text-align: center;
                            height: 10rem;
                        
                        }
                        .homeImages img {
                            display: flex;
                            flex-direction: row;
                            align-items: center
                            justify-content: center;
                            text-align: center;
                            height: 20rem;
                            width: 20rem;
                            margin-left: 10rem;
                            margin-right: 10rem;

                        }
                        .Home--Container {
                            display: flex;
                            flex-direction: column;
                            text-align: center;
                            align-items: center;
                            width: 100%;
                        }
                    `}
                </style>
            </>
        )
    }
}

export default Tasks;