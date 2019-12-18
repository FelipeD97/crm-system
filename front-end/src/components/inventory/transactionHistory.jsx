import React, { Component } from "react";
import { loadData } from "../../utils/loadData";
import { Table, Button, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
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
                <div className="salesTable">
                    <Typography>Transaction History</Typography>
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
            </>
        )
    }
}

export default TransactionHistory;