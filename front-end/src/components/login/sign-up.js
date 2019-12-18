import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import firebaseConfig from '../../config'
import 'firebase';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Typography, FormControl, Button, FormLabel } from '@material-ui/core';


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
        <form className='signupForm'onSubmit={handleSignUp}>
        <Typography variant='h2'>Sign Up</Typography>

            <FormLabel>
                Email
                <TextField name="email" type="email" placeholder="Email"/>
            </FormLabel>
            <FormLabel>
                Password
                <TextField name="password" type="password" placeholder="Password"/>
            </FormLabel>
            <Button type='submit' variant='contained' color='secondary'>Sign Up</Button>
            <Typography>Already have an account? </Typography><Link exact to='/'><Button variant='contained' color='secondary'>Login</Button></Link>

        </form>
    </div>
)
}
export default withRouter(SignUp)