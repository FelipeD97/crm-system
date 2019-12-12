
import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebaseConfig from '../../config'
import 'firebase';
import {AuthContext} from './auth'
import {Link} from 'react-router-dom'

const Login =({history})=>{
    const handleLogin = useCallback(
        async event =>{
            event.preventDefault();
            const{email,password} = event.target.elements;
            try{
                await firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                console.log(email.value)
                history.push('/signout');
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
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Log In</button>
                <h1>Don't have an account? </h1><Link exact to='signup'><button>Sign up</button></Link>


            </form>
        </div>
    )
}
export default withRouter(Login)