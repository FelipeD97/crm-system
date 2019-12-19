import React, { Component } from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
 
import "react-datepicker/dist/react-datepicker.css";

class AddItem extends Component {
    state = {
        item: '',
        cost: '',
        photo: '',
        stock: '',
        referrer: null
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
          return reply;
        }
        if (reply.status !== 200) {
          return reply;
        }
      };
      
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const data = this.state;
        console.log(data);
        await this.AddItem(data);
        this.setState({referrer: '/inventoryList'})
      };

      handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };
     
    

    render() {
        const { item, cost, photo, stock, referrer } = this.state;
        if (referrer) return <Redirect to={referrer} />;
        return(
            <div>
            <div>
            <FormControl className="addForm" onSubmit={this.handleSubmit} method="POST">
                    
                    <TextField id="standard-basic" label="Item" type="text" placeholder="item" value={item} name="item" onChange={this.handleChange}/>
                    <TextField id="standard-basic" label="Cost" type="text" placeholder="cost" value={cost} name="cost" onChange={this.handleChange}/>
                    <TextField id="standard-basic" label="Photo" type="file" placeholder="photo" value={photo} name="photo" onChange={this.handleChange}/>
                    <TextField id="standard-basic" label="Stock" type="number" placeholder="stock" value={stock} name="stock" onChange={this.handleChange}/>
                <Button variant='contained' color='primary' type="submit" onClick={this.handleSubmit}>Submit</Button>
            </FormControl>
            </div>
        <style jsx>{`
          .addForm {
            display: flex;
            justify-content: space-around;
          }
        `}</style>
            </div>
        );
    }
}

export default AddItem;