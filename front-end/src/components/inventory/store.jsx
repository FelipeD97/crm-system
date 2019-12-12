import React, { Component } from "react";
import { loadData } from "../../utils/loadData";

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

    async componentDidMount() {
        await this.getInfo()
        console.log(this.state)
    }

    getInfo = async () => {
        const inventoryInfo = await loadData(`http://localhost:3333/inventory`);
        const memberInfo = await loadData(`http://localhost:3333/member`);
        const employeeInfo = await loadData(`http://localhost:3333/employee`);

        this.setState({
            inventory: inventoryInfo,
            members: memberInfo,
            employees: employeeInfo
        });
    }

    makeSale = async data => {
        const response = await fetch(`http://localhost:3333/sales/addsale`, {
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
                        <button>Items</button>
                        <ul>
                            {inventory.map(item =>
                                <li key={item.id} value={item.id} name={item.id}>
                                    {item.item} {item.cost}
                                </li>)}
                        </ul>
                    </label>
                    <label>
                        <button>Members</button>
                        <ul>
                            {members.map(member =>
                                <li key={member.id} value={member.id} name={member.id}>
                                    {member.name}
                                </li>)}
                        </ul>
                    </label>
                    <label>
                        <button>Employees</button>
                        <ul>
                            {employees.map(employee =>
                                <li key={employee.id} value={employee.id} name={employee.id}>
                                    {employee.name}
                                </li>)}
                        </ul>
                    </label>
                    <button type="submit">make sale</button>
                </form>
            </>
        )
    }
}

export default MakeSale;