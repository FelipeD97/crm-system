import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class AddMember extends Component {
    state = {
        member_name: '',
        member_email: '',
        age: new Date(),
        date_joined: new Date(),
        phone: '',
        status: 'active',
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
        console.log(data);
        this.addMember(data);
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
        const { member_name, age, member_email, phone, date_joined } = this.state;
        return(
            <div>
            <div>
            <form className="addForm" onSubmit={this.handleSubmit} method="POST">
                <label>
                    Name
                    <input type="text" placeholder="name" value={member_name} name="member_name" onChange={this.handleChange}></input>
                </label>
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
                <label>
                    Email
                    <input type="email" placeholder="Email" value={member_email} name="member_email" onChange={this.handleChange}></input>
                </label>
                <label>
                    Phone
                    <input type="tel" placeholder="Phone" value={phone} name="phone" onChange={this.handleChange}></input>
                </label>
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
                <button type="submit">Submit</button>
            </form>
            </div>
            </div>
        );
    }
}

export default AddMember;