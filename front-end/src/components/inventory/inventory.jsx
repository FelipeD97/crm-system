import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { Link } from "react-router-dom";
import { Table, Button, Typography } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import { StylesContext } from '@material-ui/styles';






class Inventory extends Component {
    state = {
        inventory: []
};

    async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/inventory`
            ); 
        const inventory = data;

        this.setState({
            inventory
        })
    }

    render() {
        const { inventory } = this.state;

        return(
          <>
            <div className="dashInventory">
                <Typography className="inventoryTitle">Inventory</Typography>
                <FormControl>
                <Table>
                <TableHead>
                <TableRow>
                    <TableCell>
                        Item
                    </TableCell>
                    <TableCell>
                        Cost
                    </TableCell>
                    <TableCell>
                        Photo
                    </TableCell>
                    <TableCell>
                        Stock
                    </TableCell>
                </TableRow>
                </TableHead>
                
                <TableBody>
                    {inventory.map(i => (
                    <TableRow key={i.id} value={i.id} name={i.id}>
                    <TableCell>{i.item}</TableCell> 
                    <TableCell>{i.cost}</TableCell> 
                    <TableCell>{i.photo}</TableCell>
                    <TableCell>{i.stock}</TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </FormControl>
                <div className="buttonContainer">
                    <Link to="/makesale">
                        <Button color='primary' variant='contained'>Make a Sale</Button>
                    </Link>
                    <Link to="/additem">
                        <Button variant='contained' color='primary' onClick={this.handleClick} value="additem">Add Item</Button>
                    </Link>
                </div>
            </div>
            <style jsx>
                {`
                    .buttonContainer {
                        display: flex;
                        justify-content: space-around;
                        padding: 1rem;
                    }
                    .inventoryTitle {
                        display: flex;
                        justify-content: center;
                        font: 24px bold;
                    }
                `}
            </style>
            </>
        );
    }
}

export default Inventory;