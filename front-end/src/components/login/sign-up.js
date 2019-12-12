import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import firebaseConfig from '../../config'
import 'firebase';

const SignUp=({history})=>{
    const handleSignUp= useCallback(async event =>{
    event.preventDefault();
    const{email,password}= event.target.elements;
    try{
        await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value,password.value)
        history.push('/signout');
        }catch(error){
            alert(error)
        }
},[history])

return(
    <div>
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}>
            <label>
                Email
                <input name="email" type="email" placeholder="Email"/>
            </label>
            <label>
                Password
                <input name="password" type="password" placeholder="Password"/>
            </label>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
)
}
export default withRouter(SignUp)