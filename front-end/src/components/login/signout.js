import React from 'react';
import firebaseConfig from '../../config'
import 'firebase';

const Signout =()=>{
    return(
        <>
        <h1>Home</h1>
        <button onClick={()=> firebaseConfig.auth().signOut()}>sign out</button>
        </>
    )
}
export default Signout;