import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table, Button, TableContainer } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import moment from "moment";

class ActiveMembers extends Component {
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
            <Table border="1|0">
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
                {members.map(m => m.status === "active" ?
                <TableRow key={m.id} value={m.id} name={m.id}>
                  <Link to={`/memberprofile/${m.id}`}><TableCell>{m.member_name}</TableCell></Link>
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

export default ActiveMembers;