import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from'react-router-dom'
import { PrivateRoute, PrivateRouteNew } from './utils/PrivateRouteNew';

import Login from './pages/Login';
import MainComponent from './components/MainComponent';
// import { PrivateRoute } from './utils/PrivateRouteNew';
import CompanyComponent from './pages/CompanyComponent';
import HomeComponents from './Pages/HomeComponents';


const root = ReactDOM.createRoot(document.getElementById('root'));

// routes
root.render(
    <Router>
        <Routes>
            <Route exact path="/" element ={<Login/>}></Route>
            <PrivateRouteNew exact path="/home" activepage="0" page={<HomeComponents/>}></PrivateRouteNew>
            <PrivateRouteNew exact path="/company" activepage="1" page={<CompanyComponent/>}></PrivateRouteNew>

            
        </Routes>
    </Router>);

// Create a root and render the component
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello World</h1>);