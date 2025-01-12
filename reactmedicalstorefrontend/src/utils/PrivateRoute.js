import React from "react";
import { Route, Navigate } from "react-router-dom"
import AuthHandler from "./AuthHandler";

export var PrivateRoute = ({component:Component,...rest}) =>{
    console.log({ ...rest });
    console.log(rest);
    return (
    <Route
    {...rest}
    // used element instead of render in Props
    element={(props) => 
        AuthHandler.loggedIn() ? (<Component {...props}/>) : <Navigate to="/" />} 
        />
    );
}


// export var PrivateRoute = ({ component: Component, ...rest }) => {
//     console.log({ ...rest });
//     console.log(rest);
//     return (
//         <Route
//             {...rest}
//             element={
//                 AuthHandler.loggedIn() 
//                     ? <Component {...rest} /> 
//                     : <Navigate to="/" />
//             }
//         />
//     );
// };

// export default PrivateRoute;
