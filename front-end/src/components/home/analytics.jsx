import React, { Component } from "react";
import { loadData } from "../../utils/loadData";
import { Radio } from '@material-ui/core';
import {Typography, Button} from '@material-ui/core'
import purple from '@material-ui/core/colors/purple';



class Analytics extends Component {
    state = {
        sales: [],

        
    }

    async componentDidMount() {
        await this.getInfo();
    }

    getInfo = async () => {
        const salesInfo = await loadData(`http://localhost:3333/sales`);


        this.setState({
            sales: salesInfo,
    
        });
    }


    handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        this.makeSale(data);
        // this.updateStock();
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

  
    

    render() {
        const { sales } = this.state;
        console.log({sales})
        return(
            <>
                
                    <label>
                        <Typography color='purple'>Best Selling Item</Typography>
                        {sales.map(sale =>
                         
                            <Typography>{sale.item}</Typography>
                            
                           
                    
                        )}
                    </label>
                   
            </>
        )
    }
}

export default Analytics;