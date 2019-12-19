import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {FormControl, Paper, TextField, Button, Typography, Select, MenuItem, InputLabel} from '@material-ui/core';
import Avatar from '../../images/boy.svg';


class EditMember extends Component {
    state = {
        members: [],
        id: this.props.match.params.memberid,
        member_name: '',
        member_email: '',
        phone: '',
        status: '',
        referrer: null
    }

    async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/member`
            ); 
            const members = data;

        this.setState({
            members
        })
        }

        editMember = async edit => {
            const response = await fetch(`http://localhost:3333/member/updateMember`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(edit)
            });
            const reply = await response;
            if (reply.status === 200) {
              return reply
            }
            if (reply.status !== 200) {
              return reply;
            }
          };
        
          handleSubmit = async (e) => {
            e.preventDefault();

            const { id, member_name, member_email, phone, status } = this.state;
            const edit = {id, member_name, member_email, phone, status}

            await this.editMember(edit)
            this.setState({referrer: '/members'})
          };
    
          handleChange = e => {
            const { name, value } = e.target;
            console.log(this.state);
        
            this.setState({
              [name]: value
            });
          };

          handleSelectChange = e => {
            const { value } = e.target;

            this.setState({
              status: value,
            })
          }

    render() { 
        const { members, member_name, member_email, phone, status, referrer } = this.state;
        const handle = parseInt(this.props.match.params.memberid);
        if (referrer) return <Redirect to={referrer} />;

        return ( 
        <>
        
            <Paper className="Paper">
            <Typography className="inventoryTitle">Edit Profile</Typography>
            </Paper>
                <FormControl>
                <div className="addFormList">
                {members.map(m => m.id === handle  ?
                    <ul key={m.id} value={m.id} name={m.id}>
                        
                            <TextField label="Name" name="member_name"type="text" value={member_name} placeholder={m.member_name} onChange={this.handleChange} />
                        
                          <TextField  label="Email" name="member_email" type="email" value={member_email} placeholder={m.member_email} onChange={this.handleChange} />
                        
                            <TextField label="Phone Number" name="phone"type="tel" value={phone} placeholder={m.phone} onChange={this.handleChange} />
                          <FormControl>
                          <InputLabel>Status</InputLabel>
                          <Select placeholder="Status" onChange={this.handleSelectChange}>
                            
                            <MenuItem value={status} name={status} value="active">Active</MenuItem>
                            <MenuItem value={status} name={status} value="inactive">Inactive</MenuItem>
                          </Select>
                          </FormControl>
                        
                    <Button variant='contained' color='primary' type="submit" onClick={this.handleSubmit}>Update Now</Button>
                    </ul>
                : null)}
                </div>
                </FormControl>
        
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

        `}
    </style>
    </>
        );
    }
}
 
export default EditMember;