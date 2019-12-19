import React from 'react';
import { Link } from "react-router-dom";
import { Table, Button, Typography } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import {FormControl} from '@material-ui/core';

const Inventory = props => {

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
                        Stock
                    </TableCell>
                </TableRow>
                </TableHead>
                
                <TableBody>
                    {props.inventory.map(i => (
                    <TableRow key={i.id} value={i.id} name={i.id}>
                    <TableCell>{i.item}</TableCell> 
                    <TableCell>{i.cost}</TableCell> 
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
                        <Button variant='contained' color='primary' value="additem">Add Item</Button>
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

export default Inventory;