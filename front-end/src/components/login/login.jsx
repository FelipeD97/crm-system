
import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebaseConfig from '../../config'
import 'firebase';
import {AuthContext} from './auth'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';





const Login =({history})=>{
    const handleLogin = useCallback(
        async event =>{
            event.preventDefault();
            const{email,password} = event.target.elements;
            try{
                await firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                history.push('/signout')
            }catch(error){
                alert(error)
            }
            
        },
        [history]
    )
    const {currentUser} = useContext(AuthContext);
    if(currentUser){
        return <Redirect to='/signout' />
    }
    return(
        <div>
            <Typography align='center' variant='h2'color='textPrimary' display='block'>Login</Typography>
            <form onSubmit={handleLogin} className='loginForm'>
                <label>Email
                    <TextField color='secondary' name="email" type="email" placeholder="Email"></TextField>
                </label>
                <label>Password
                    <TextField color='secondary' name="password" type="password" placeholder="Password"></TextField>
                </label>
                <Button type="submit" variant='contained' color='secondary'>Log In</Button>
                <Typography variant='h5' color='textPrimary' align='center'>Don't have an account? </Typography>
                <Link exact to='signup' 
                ><Button color='secondary' variant='contained'>Sign up</Button>
                </Link>


            </form>
        </div>
    )
}
export default withRouter(Login)