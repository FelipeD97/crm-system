import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from "moment";

class InactiveMembers extends Component {
    state = {
        members: []
};

async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/member`
            ); 
            const members = data;

        this.setState({
            members
        })
        }

    render() {
        const { members } = this.state;
        return(
            <>
            <div className="dashMembers">
            <h1>Members</h1>
            <form>
            <table border="1|0">
              <thead>
              <tr>
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Phone Number
                </th>
                <th>
                    Date Joined
                </th>
                <th>
                    Status
                </th>
              </tr>
              </thead>
              
              <tbody>
                {members.map(m => m.status === "inactive" ?
                <tr key={m.id} value={m.id} name={m.id}>
                  <Link to={`/memberprofile/${m.id}`}><td>{m.member_name}</td></Link>
                  <td>{m.member_email}</td> 
                  <td>{m.phone}</td>
                  <td>{moment(m.date_joined).format("dddd, MMMM Do, YYYY")}</td>
                  <td>{m.status}</td>
                  </tr>
                  : null)}
                  </tbody>
            </table>
            </form>
            </div>
            </>
        );
    }
}

export default InactiveMembers;