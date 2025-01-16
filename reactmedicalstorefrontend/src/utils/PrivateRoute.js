import React from "react";
import { Route, Router, Routes, Navigate } from "react-router-dom"
import AuthHandler from "./AuthHandler";

export var PrivateRoute = ({component:Component,...rest}) =>{
    console.log({ ...rest });
    console.log(rest);
    return (

        <Router>
            <Routes>
    <Route
    {...rest}
    // used element instead of render in Props
    element={(props) => 
        AuthHandler.loggedIn() ? (<Component {...props}/>) : <Navigate to="/" />} 
        />
        </Routes>
        </Router>
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
