import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import {Button, FormControl, TextField, FormLabel} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
 
import "react-datepicker/dist/react-datepicker.css";

class AddTask extends Component {
    state = {
        task: '',
        employee: '',
        referrer:null
    }

    AddTask = async data => {
        const response = await fetch("http://localhost:3333/tasks/addtasks", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const reply = await response;
        if (reply.status === 200) {
          alert("task Added!");
        }
        if (reply.status !== 200) {
          alert("task not added");
        }
      };
      
    
      handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        console.log(data);
        this.AddTask(data);
        this.setState({referrer: '/signout'})
      };

      handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };
     
    

    render() {
        const { task_info, employee_id, referrer} = this.state;
        if (referrer) return <Redirect to={referrer} />;
        return(
            <div>
            <div>
            <FormControl className="addForm" onSubmit={this.handleSubmit} method="POST">
                    
                    <TextField id="standard-basic" label="Tasks for the gym!" type="text" placeholder="task_info" value={task_info} name="task_info" onChange={this.handleChange}/>
                    <TextField id="standard-basic" label="Employee" type="text" placeholder="employee_id" value={employee_id} name="employee_id" onChange={this.handleChange}/>
                <Button variant='contained' color='primary' type="submit" onClick={this.handleSubmit}>Submit</Button>
            </FormControl>
            </div>
            </div>
        );
    }
}

export default AddTask; 