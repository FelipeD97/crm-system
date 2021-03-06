import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from "moment";
import { Table, TableHead, TableRow, TableCell, TableBody, FormControl, Button, Typography, Paper } from '@material-ui/core';
import { StylesContext } from '@material-ui/styles';

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
            <div className="dashInventory">
            <Paper className="Paper">
            <Typography className="inventoryTitle">Inactive Members</Typography>
            </Paper>
            <FormControl>
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
                  <TableCell className="nameHover"><Link to={`/memberprofile/${m.id}`}>{m.member_name}</Link></TableCell>
                  <TableCell>{m.member_email}</TableCell>
                  <TableCell>{m.phone}</TableCell>
                  <TableCell>{moment(m.date_joined).format("dddd, MMMM Do, YYYY")}</TableCell>
                  <TableCell>{m.status}</TableCell>
                  </TableRow>
                  : null)}
                  </TableBody>
            </Table>
            </FormControl>
            </div>
            <style jsx>
                {`
                    .inventoryTitle {
                        display: flex;
                        justify-content: center;
                        font: 24px bold;
                        font-weight: bold;
                        text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                        0px 8px 13px rgba(0,0,0,0.1),
                        0px 18px 23px rgba(0,0,0,0.1);
                    }
                    .Paper {
                      background-color: grey;
                    }
                    .nameHover:hover {
                        font-weight: bold;
                    }
                `}
            </style>
            </>
        );
    }
}

export default InactiveMembers;