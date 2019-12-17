import React from 'react';
import { loadData } from "../../utils/loadData"
;import { makeStyles } from '@material-ui/core/styles';
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

const ItemDropdown = props => {
    const classes = useStyles();
    
    return (
      <div>
        <FormControl className={classes.formControl} onSubmit={props.handleSubmit}>
          <InputLabel>Items</InputLabel>
            
              <Select
                key={props.name}
                value={props.item}
                onChange={props.handleChange}
                name="item_id"
              >
                {props.inventory.map(item =>
                <MenuItem key={item.id}  value={item.id}>{item.item}</MenuItem>)}
              </Select>
        </FormControl>
    </div>
    )
}

export default ItemDropdown;