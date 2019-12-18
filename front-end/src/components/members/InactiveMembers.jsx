import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from "moment";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
            <Table>
              <TableHead>
              <TableRow>
                <TableCell>
                    Name
                </TableCell>
                <TableCell>
                    Email
                </TableCell>
                <TableCell>
                    Phone Number
                </TableCell>
                <TableCell>
                    Date Joined
                </TableCell>
                <TableCell>
                    Status
                </TableCell>
              </TableRow>
              </TableHead>
              
              <TableBody>
                {members.map(m => m.status === "inactive" ?
                <TableRow key={m.id} value={m.id} name={m.id}>
                  <TableCell><Link to={`/memberprofile/${m.id}`}>{m.member_name}</Link></TableCell>
                  <TableCell>{m.member_email}</TableCell>
                  <TableCell>{m.phone}</TableCell>
                  <TableCell>{moment(m.date_joined).format("dddd, MMMM Do, YYYY")}</TableCell>
                  <TableCell>{m.status}</TableCell>
                  </TableRow>
                  : null)}
                  </TableBody>
            </Table>
            </form>
            </div>
            </>
        );
    }
}

export default InactiveMembers;