import React, { Component } from "react";
import { loadData } from "../../utils/loadData";
import { Radio } from '@material-ui/core';
import {Typography, Button} from '@material-ui/core';
import { Redirect } from 'react-router-dom';


class MakeSale extends Component {
    state = {
        inventory: [],
        members: [],
        employees:[],
        item_id: "",
        member_id: "",
        employee_id: "",
        stock: [],
        referrer: null,
        date_sold: new Date(),
        stock: []
    }

    async componentDidMount() {
        await this.getInfo();
        await this.convertDate();
        console.log(this.state)
    }

    getInfo = async () => {
        const inventoryInfo = await loadData(`http://localhost:3333/inventory`);
        const memberInfo = await loadData(`http://localhost:3333/member`);
        const employeeInfo = await loadData(`http://localhost:3333/employee`);
        

        this.setState({
            inventory: inventoryInfo,
            members: memberInfo,
            employees: employeeInfo,
            stock: inventoryInfo
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
        this.setState({referrer: '/inventory'})
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    convertDate() {
        let currentDate = new Date();
        let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
    
        new Intl.DateTimeFormat("en-US", options).format(
            currentDate
        );
        this.setState({
            date_sold: currentDate
        })
    }

    render() {
        const { inventory, members, employees, referrer } = this.state;
        if (referrer) return <Redirect to={referrer} />;

        return(
            <>
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>
                        <ul>Item
                        {inventory.map(item =>
                            <label key={item.id} value={item.id} name={item.id}>
                                {item.item}
                                <input type="radio" name="item_id" value={item.id} onChange={this.handleChange} />
                            </label>)}
                        </ul>    
                    </label>
                    <label>
                        <ul><Typography>Member</Typography>
                        {members.map(member =>
                            <label key={member.id} value={member.id} name={member.id}>
                                 {member.member_name}
                                <Radio  name="member_id" value={member.id} onChange={this.handleChange} />
                            </label>)}
                            </ul>
                    </label>
                    <label>
                        <ul><Typography>Employee</Typography>
                        {employees.map(employee =>
                            <label key={employee.id} value={employee.id} name={employee.id}>
                                 {employee.name}
                                <Radio  name="employee_id" value={employee.id} onChange={this.handleChange} />
                            </label>)}
                            </ul>
                    </label>
                    <Button color='primary' letiant='contained' type="submit">Make sale</Button>
                </form>
            </>
        )
    }
}

export default MakeSale;