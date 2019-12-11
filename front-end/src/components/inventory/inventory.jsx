import React, { Component } from 'react';
import loadData from '../../utils/loadData';

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
                {inventory.map(inventories => (
                <tr key={inventories.id} value={inventories.id} name={inventories.id}>
                <td>{inventories.cost}</td> 
                  <td>{inventories.item}</td> 
                  <td>{inventories.stock}</td>
                  </tr>
                ))}
                  </tbody>
            </table>
            </form>
            </div>
            </>
        );
    }
}

export default Inventory;