import React, { Component } from "react";
import { loadData } from "../../utils/loadData";
import { Table, Button, TableCell, TableHead, TableRow, Typography, Paper } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import moment from "moment";


class TransactionHistory extends Component {
    state = {
        sales: []
    }

    async componentDidMount() {
        const data = await loadData(`http://localhost:3333/sales`);
        const sales = data;

        this.setState ({
            sales
        })
    }

    render() {
        const { sales } = this.state;
        return (
            <>
                <div className="dashInventory">
                    <Paper className="Paper">
                    <Typography className="inventoryTitle">Transaction History</Typography>
                    </Paper>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Item
                                </TableCell>
                                <TableCell>
                                    Price
                                </TableCell>
                                <TableCell>
                                    Member
                                </TableCell>
                                <TableCell>
                                    Employee
                                </TableCell>
                                <TableCell>
                                    Date Sold
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sales.map(sale =>
                                <TableRow key={sale.id} value={sale.id} name={sale.id}>
                                    <TableCell>{sale.item}</TableCell>
                                    <TableCell>{sale.cost}</TableCell>
                                    <TableCell>{sale.member_name}</TableCell>
                                    <TableCell>{sale.employee_name}</TableCell>
                            <TableCell>{moment(sale.date_sold).format("dddd, MMMM Do, YYYY")}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
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
        )
    }
}

export default TransactionHistory;