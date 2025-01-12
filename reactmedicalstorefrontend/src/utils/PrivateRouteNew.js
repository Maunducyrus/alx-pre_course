import React from "react";
import { Route, Navigate, Router, Routes } from "react-router-dom"
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent"

// export var PrivateRouteNew = ({ page, ...rest }) =>{
//     return (
//     <Route
//     {...rest}
//     element={() => 
//         AuthHandler.loggedIn() ? (<MainComponent page={page} activepage={activepage} />) : (<Navigate to='/' />)
//     } 
//     />
//     );
// }
export var PrivateRouteNew = ({ page, activepage, ...rest }) => {
    return (
        <Router>
        <Routes>
        <Route
            {...rest}
            element={
                AuthHandler.loggedIn() 
                    ? <MainComponent page={page} activepage={activepage} />
                    : <Navigate to="/" />
            }
        />
        </Routes>
        </Router>
    );
};

export default PrivateRouteNew;

// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import AuthHandler from "./AuthHandler";
// import MainComponent from "../components/MainComponent";

// export var PrivateRouteNew = ({ page, activepage, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             element={
//                 AuthHandler.loggedIn() 
//                     ? <MainComponent page={page} activepage={activepage} />
//                     : <Navigate to="/" />
//             }
//         />
//     );
// };

// export default PrivateRouteNew;
