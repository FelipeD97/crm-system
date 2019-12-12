import React, { Component } from "react";
import { loadData } from "../../utils/loadData";

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
                    <h1>Transaction History</h1>
                    <table border="1|0">
                        <thead>
                            <tr>
                                <th>
                                    Item
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Member
                                </th>
                                <th>
                                    Employee
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map(sale =>
                                <tr key={sale.id} value={sale.id} name={sale.id}>
                                    <td>{sale.item}</td>
                                    <td>{sale.cost}</td>
                                    <td>{sale.member_name}</td>
                                    <td>{sale.name}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default TransactionHistory;