
import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebaseConfig from '../../config'
import 'firebase';
import {AuthContext} from './auth'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Typography, FormControl, FormLabel, InputAdornment, InputLabel, Input} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOff from '@material-ui/icons/VisibilityOff';





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
            <Typography 
                align='center' 
                variant='h2'
                color='textPrimary' 
                display='block'>
                    Welcome
            </Typography>

            <form 
                onSubmit={handleLogin} 
                className='loginForm'>
            <FormControl>
                <TextField
                  name="email"
                  id="input-with-icon-textfield"
                  label="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                </FormControl>    
            
                <FormControl>
                <TextField
                    name="password"
                    id="filled-adornment-password"
                    label="Password"
                    type="password"
                    color="secondary"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <VisibilityOff />
                        </InputAdornment>
                    ),
                    }}
                />
                </FormControl>
                
                <Button 
                    type="submit" 
                    variant='contained' 
                    color='secondary'>
                    Log In
                </Button>

                <Typography 
                    variant='h5' 
                    color='textPrimary' 
                    align='center'>
                        Don't have an account? 
                </Typography>

                <Link exact to='signup'>
                    <Button 
                    color='secondary' 
                    variant='contained'>
                        Sign up
                    </Button>
                </Link>
        </form>
    </div>
    )
}
export default withRouter(Login)