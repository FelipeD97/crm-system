import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Button, FormControl, TextField, FormLabel, Paper, Typography} from '@material-ui/core';

class AddMember extends Component {
    state = {
        member_name: '',
        member_email: '',
        age: '',
        date_joined: new Date(),
        phone: '',
        status: 'active',
        refferer: null
    }

    addMember = async data => {
        const response = await fetch("http://localhost:3333/member/addmember", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const reply = await response;
        if (reply.status === 200) {
          return reply;
        }
        if (reply.status !== 200) {
          return reply;
        }
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const data = this.state;
        await this.addMember(data);
        this.setState({referrer: '/members'});
      };

      handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };

    render() {
        const { member_name, age, member_email, phone, date_joined, referrer } = this.state;
        if (referrer) return <Redirect to={referrer} />;
        return(
          <>
          <Paper className="Paper">
            <Typography className="inventoryTitle">Add a New Member</Typography>
            </Paper>
            <FormControl onSubmit={this.handleSubmit} method="POST">
              <div className="addForm">
                
                    <TextField  id="standard-basic" label="Name" type="text" placeholder="name" value={member_name} name="member_name" onChange={this.handleChange}></TextField>
                    <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                  />

                <TextField id="standard-basic" label="Email" type="email" placeholder="Email" value={member_email} name="member_email" onChange={this.handleChange}>
                </TextField>

                  <TextField id="standard-basic" label="Phone" type="tel" placeholder="Phone" value={phone} name="phone" onChange={this.handleChange}></TextField>
                  <TextField
                    id="date"
                    label="Date Joined"
                    type="date"
                    defaultValue = ''
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="date_joined"
                    value={date_joined}
                    onChange={this.handleChange}
                  />
                <Button variant='contained' color='primary' type="submit" onClick={this.handleSubmit}>Submit</Button>
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

// {/* <TextField id="standard-basic" label="Stock" type="number" placeholder="stock" value={stock} name="stock" onChange={this.handleChange}/> */}
        );
    }
}

export default AddMember;