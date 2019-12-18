import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import Inventory from "../inventory/inventory";

class InventoryList extends Component {
    state = {
        inventory: []
};

    async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/inventory`
            ); 
        const inventory = data;

        console.log("inventory component did mount data is", data);

        this.setState({
            inventory
        })
    }
    
    render() {
        const { inventory } = this.state;
        return (
            <Inventory inventory={inventory}/>
        )
    }
}

export default InventoryList;