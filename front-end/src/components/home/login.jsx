import React, { Component } from 'react';
import loadData from "../../utils/loadData";

class Login extends Component {
        
    state = {
        employees: [],
        email: "",
        password: ""
    }

    async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/employees`
        );
            const employees = data;
    
        this.setState({
            employees
        })
    }

        handleChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            })
        }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Email: 
                        <input
                        type="email"
                        placeholder="name@gmail.com"
                        value={this.email}
                        name="email"
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password: 
                        <input 
                        type="password"
                        value={this.password}
                        name="password"
                        onChange={this.handleChange}
                        />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
