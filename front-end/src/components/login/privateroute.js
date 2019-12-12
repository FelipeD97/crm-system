import React, { useContext } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../../config'
import 'firebase';
import {AuthContext} from './auth'
import {Route, Redirect} from 'react-router-dom';
const PrivateRoute=({component: RouteComponent, ...rest})=>{
    const{currentUser} = useContext(AuthContext);
    return(
        <Route
        {...rest}
        render={routeProps=>
        !!currentUser?(
            <RouteComponent {...routeProps}/>
            ):(
                <Redirect to={'/login'}/>
            )
        }
        />
    )
}
export default PrivateRoute