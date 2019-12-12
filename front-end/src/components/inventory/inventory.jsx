import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { Link } from "react-router-dom";

class Inventory extends Component {
    state = {
        inventory: []
};

async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/inventory`
            ); 
            const inventory = data;

        this.setState({
            inventory
        })
        }

    render() {
        const { inventory } = this.state;
        return(
          <>
            <div className="dashInventory">
            <h1>inventory</h1>
            <form>
            <table border="1|0">
              <thead>
              <tr>
                <th>
                    Item
                </th>
                <th>
                    cost
                </th>
                <th>
                    photo
                </th>
                <th>
                    stock
                </th>
              </tr>
              </thead>
              
              <tbody>
                {inventory.map(i => (
                <tr key={i.id} value={i.id} name={i.id}>
                <td>{i.item}</td> 
                  <td>{i.cost}</td> 
                  <td>{i.photo}</td>
                  <td>{i.stock}</td>
                  </tr>
                ))}
                  </tbody>
            </table>
            </form>
            <Link to="/makesale">
                <button>Make a Sale</button>
            </Link>
            </div>
            </>
        );
    }
}

export default Inventory;