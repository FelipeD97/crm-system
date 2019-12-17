import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EmployeeDropdown = props => {
    const classes = useStyles();
    
    return (
      <div>
        <FormControl className={classes.formControl} onSubmit={props.handleSubmit}>
          <InputLabel>Employees</InputLabel>
            
              <Select
                key={props.name}
                value={props.employee_name}
                onChange={props.handleChange}
                name="employee_id"
              >
                {props.employees.map(employee =>
                <MenuItem key={employee.id}  value={employee.id}>{employee.employee_name}</MenuItem>)}
              </Select>
        </FormControl>
    </div>
    )
}

export default EmployeeDropdown;