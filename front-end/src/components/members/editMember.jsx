import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {FormControl, FormLabel, TextField, Button, Typography} from '@material-ui/core'


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
              alert("Member Updated!");
            }
            if (reply.status !== 200) {
              alert("Failed Update");
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
        <div>
            <Typography>Edit Profile</Typography>
                <FormControl className="theForm" id="theForm">
                {members.map(m => m.id === handle  ?
                    <ul key={m.id} value={m.id} name={m.id}>
                        <FormLabel>
                            Name
                            <input name="member_name"type="text" value={member_name} placeholder={m.member_name} onChange={this.handleChange} />
                        </FormLabel>
                        <FormLabel>
                          Email
                          <input name="member_email" type="email" value={member_email} placeholder={m.member_email} onChange={this.handleChange} />
                        </FormLabel>
                        <FormLabel>
                            Phone Number
                            <input name="phone"type="tel" value={phone} placeholder={m.phone} onChange={this.handleChange} />
                        </FormLabel>
                        <FormLabel>
                          Status
                          <select onChange={this.handleSelectChange}>
                            <option value={status} name={status} value="active">Active</option>
                            <option value={status} name={status} value="inactive">Inactive</option>
                          </select>
                        </FormLabel>
                    <button onClick={this.handleSubmit} id="submitButton">Update Now</button>
                    </ul>
                : null)}
                </FormControl>
        </div> 
        </>
        );
    }
}
 
export default EditMember;