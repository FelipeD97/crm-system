import React from 'react';
import firebaseConfig from '../../config'
import 'firebase';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core'
import {Box} from '@material-ui/core'
import Analytics from '../home/analytics'

const Signout =()=>{
    return(
   
        <div>
        <Typography>Home</Typography>
        <Button variant='contained' color='secondary' onClick={()=> firebaseConfig.auth().signOut()}>Sign out</Button>
        </div>
    )
}
export default Signout;