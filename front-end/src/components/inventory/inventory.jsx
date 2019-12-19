import React from 'react';
import { Link } from "react-router-dom";
import { Table, Button, Typography } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow, Paper } from '@material-ui/core';
import {FormControl} from '@material-ui/core';

const Inventory = props => {

        return(
          <>
            <div className="dashInventory">
                <Paper className="Paper">
                <Typography className="inventoryTitle">Inventory</Typography>
                </Paper>
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
        );
    }

export default Inventory;