import React from "react";
import { Route, Redirect } from "react-router-dom"
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent"

export var PrivateRouteNew = ({ page }) =>{
    return (
    <Route
    render={() => 
        AuthHandler.loggedIn() ? <MainComponent page={page}/> : <Redirect to='/' />
    } 
    />
    );
}