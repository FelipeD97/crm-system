import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import firebaseConfig from '../../config'
import 'firebase';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Typography, FormControl, FormLabel, InputAdornment, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const SignUp=({history})=>{
    const handleSignUp= useCallback(async event =>{
    event.preventDefault();
    const{email,password}= event.target.elements;
    try{
        await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value,password.value)
        history.push('/');
        }catch(error){
            alert(error)
        }
},[history])

return(
    <div>
        <form 
            className='loginForm'
            onSubmit={handleSignUp}>
        <Typography variant='h2'>Sign Up</Typography>

        <FormControl>
        <TextField
                name="email"
                id="input-with-icon-textfield"
                label="Email"
                type="email"
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
                        id="input-with-icon-textfield"
                        label="Password"
                        type="password"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <VisibilityOff />
                            </InputAdornment>
                        ),
                        }}
                    />
                </FormControl>

            <Button type='submit' variant='contained' color='secondary'>Sign Up</Button>
            <Typography>Already have an account? </Typography><Link exact to='/'><Button variant='contained' color='secondary'>Login</Button></Link>

        </form>
    </div>
)
}
export default withRouter(SignUp)