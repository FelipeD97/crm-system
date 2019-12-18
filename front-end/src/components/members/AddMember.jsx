import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Redirect } from 'react-router-dom';
import {Button, FormControl, TextField, FormLabel} from '@material-ui/core';
 
import "react-datepicker/dist/react-datepicker.css";

class AddMember extends Component {
    state = {
        member_name: '',
        member_email: '',
        age: new Date(),
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
          alert("Member Added!");
        }
        if (reply.status !== 200) {
          alert("Member not added");
        }
      };
    
      handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        this.addMember(data);
        this.setState({referrer: '/members'});
        // this.props.history.push('/');
      };

      handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };

      handleDateChange = date => {
        this.setState({
          date_joined: date,
          age: date
        });
      };
    

    render() {
        const { member_name, age, member_email, phone, date_joined, referrer } = this.state;
        if (referrer) return <Redirect to={referrer} />;
        return(
            <FormControl onSubmit={this.handleSubmit} method="POST">
              <div className="addForm">
                
                    <TextField  id="standard-basic" label="Name" type="text" placeholder="name" value={member_name} name="member_name" onChange={this.handleChange}></TextField>
              <label>
                Date Of Birth
                <DatePicker
                    selected={age}
                    onChange={this.handleDateChange}
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={10}
                    scrollableYearDropdown
                />
                </label>

                <TextField id="standard-basic" label="Email" type="email" placeholder="Email" value={member_email} name="member_email" onChange={this.handleChange}>
                </TextField>

                  <TextField id="standard-basic" label="Phone" type="tel" placeholder="Phone" value={phone} name="phone" onChange={this.handleChange}></TextField>
                <label>
                    Date Joined
                <DatePicker
                    selected={date_joined}
                    onChange={this.handleDateChange}
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={15}
                    scrollableYearDropdown
                />
                </label>
                <Button variant='contained' color='primary' type="submit" onClick={this.handleSubmit}>Submit</Button>
                </div>
            </FormControl>

// {/* <TextField id="standard-basic" label="Stock" type="number" placeholder="stock" value={stock} name="stock" onChange={this.handleChange}/> */}
        );
    }
}

export default AddMember;