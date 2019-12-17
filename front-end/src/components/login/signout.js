import React from 'react';
import firebaseConfig from '../../config'
import 'firebase';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core'
import {Box} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core/';


const Signout =()=>{
    return(
   
        <div>
        <Typography>Home</Typography>
        <Button variant='contained' color='secondary' onClick={()=> firebaseConfig.auth().signOut()}>sign out</Button>
        </div>
    )
}
export default Signout;