
import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebaseConfig from '../../config'
import 'firebase';
import {AuthContext} from './auth'

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
                <label>email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">log in</button>

            </form>
        </div>
    )
}
export default withRouter(Login)