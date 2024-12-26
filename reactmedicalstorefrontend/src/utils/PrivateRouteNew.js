import React from "react";
import { Route, Redirect } from "react-router-dom"
import AuthHandler from "./AuthHandler";

export var PrivateRouteNew = ({ page }) =>{
    return (
    <Route
    render={(props) => 
        AuthHandler.loggedIn() ? <MainComponent /> : <Redirect to='/' />} 
        />
    );
}