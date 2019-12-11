import React, { Component } from "react";

class MakeSale extends Component {
    state = {
        inventory: [],
        members: [],
        employees:[],
        item_id: "",
        cost: "",
        member_id: "",
        employee_id: ""
    }

    getInfo = async data => {
        const inventoryInfo = await fetch(`http://localhost:3333/inventory`);
        const memberInfo = await fetch (`http://localhost:3333/member`);
        const employeeInfo = await fetch(`http://localhost:3333/employee`);

        const inventory = inventoryInfo;
        const members = memberInfo;
        const employees = employeeInfo;

        this.setState({
            inventory,
            members,
            employees
        });
    }

    makeSale = async data => {
        const response = await fetch (`http://localhost:3333/sales/addsale`, {
            method: "POST",
            headers: {
                Accept: "application/json", "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const reply = await response;
        if (reply.status === 200) {
            alert("Sale Made!");
        }
        if(reply.status !== 200) {
            alert("Sale not Made");
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        this.makeSale(data);
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        const { inventory, members, employees, item_id, cost, member_id, employee_id } = this.state;

        return(
            <>
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>
                        Item
                        <input type="text"
                        value={cost}
                        name="cost"
                        onChange={this.handleChange} />
                    </label>
                    <button type="submit">make sale</button>
                </form>
            </>
        )
    }
}

export default MakeSale;