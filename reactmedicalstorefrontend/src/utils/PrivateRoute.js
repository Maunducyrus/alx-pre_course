import React from "react";
import AuthHandler from "./AuthHandler";

export var PrivateRoute = ({component:Component,...rest}) =>{
    <Route
    {...rest}
    render={(props) => AuthHandler.loggedIn() ? (<Component {...props}/>) : <Redirect to='/' />} />
}