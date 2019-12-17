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

const MemberDropdown = props => {
    const classes = useStyles();
  
    return (
      <div>
        <FormControl className={classes.formControl} onSubmit={props.handleSubmit}>
          <InputLabel>Members</InputLabel>
            
              <Select
                key={props.name}
                name="member_id"
                value={props.member_name}
                onChange={props.handleChange}
              >
                {props.members.map(member =>
                <MenuItem key={member.id} value={member.id}>{member.member_name}</MenuItem>)}
              </Select>
        </FormControl>
    </div>
    )
}

export default MemberDropdown;