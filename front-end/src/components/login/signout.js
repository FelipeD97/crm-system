import React from 'react';
import firebaseConfig from '../../config'
import 'firebase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));


const Signout =()=>{
    const classes = useStyles();

    return(
   
        <div className="Header">
            <div className={classes.root}>
                <Badge badgeContent={4} color="primary">
                    <MailIcon />
                </Badge>
            </div>
        <Button variant='contained' color='secondary' onClick={()=> firebaseConfig.auth().signOut()}>Sign out</Button>
        </div>
    )
}
export default Signout;