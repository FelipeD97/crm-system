import React, { Component } from "react";
import { loadData } from "../../utils/loadData";
import { Table, Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import {Typography} from '@material-ui/core';


class Tasks extends Component {
    state = {
        tasks: []
    }

    async componentDidMount() {
        const data = await loadData(`http://localhost:3333/tasks`);
        const tasks = data;

        this.setState ({
            tasks
        })
    }

    render() {
        const { tasks } = this.state;
        return (
            <>
                <div className="salesTable">
                    <Typography>Tasks</Typography>
                    <Table border="1|0">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Task
                                </TableCell>
                                <TableCell>
                                    Employee
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {tasks.map(task => (
                    <TableRow key={task.id} value={task.id} name={task.id}>
                    <TableCell>{task.task_info}</TableCell> 
                    <TableCell>{task.employee_id}</TableCell>
                    </TableRow>
                    ))}
                        </TableBody>
                    </Table>
                </div>
            </>
        )
    }
}

export default Tasks;