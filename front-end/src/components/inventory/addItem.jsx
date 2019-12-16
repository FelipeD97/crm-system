import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import {Button, FormControl} from '@material-ui/core';
 
import "react-datepicker/dist/react-datepicker.css";

class AddItem extends Component {
    state = {
        item: '',
        cost: '',
        photo: '',
        stock: ''
        
    }

    AddItem = async data => {
        const response = await fetch("http://localhost:3333/inventory/addinventory", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const reply = await response;
        if (reply.status === 200) {
          alert("item Added!");
        }
        if (reply.status !== 200) {
          alert("item not added");
        }
      };
      
    
      handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        console.log(data);
        this.AddItem(data);
        // this.props.history.push('/');
      };

      handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };
     
    

    render() {
        const { item, cost, photo, stock } = this.state;
        return(
            <div>
            <div>
            <FormControl className="addForm" onSubmit={this.handleSubmit} method="POST">
                <label>
                    Item
                    <input type="text" placeholder="item" value={item} name="item" onChange={this.handleChange}/>
                </label>
                <label>
                    Cost
                    <input type="text" placeholder="cost" value={cost} name="cost" onChange={this.handleChange}/>

                </label>
                <label>
                    Photo
                    <input type="text" placeholder="photo" value={photo} name="photo" onChange={this.handleChange}/>
                </label>
                <label>
                    stock
                    <input type="text" placeholder="stock" value={stock} name="stock" onChange={this.handleChange}/>
                </label>
                <Button variant='contained' color='primary' type="submit">Submit</Button>
            </FormControl>
            </div>
            </div>
        );
    }
}

export default AddItem;