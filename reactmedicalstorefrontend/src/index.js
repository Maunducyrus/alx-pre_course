import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from'react-router-dom'
import { PrivateRoute } from './utils/PrivateRouteNew';

import Login from './pages/Login';
import MainComponent from './components/MainComponent';
import { PrivateRoute } from './utils/PrivateRouteNew';
import CompanyComponent from './pages/CompanyComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route exact path="/" element ={<Login/>}></Route>
            <PrivateRoute exact path="/home" page={<HomeComponent/>}></PrivateRoute>
            <PrivateRoute exact path="/company" page={<CompanyComponent/>}></PrivateRoute>

            
        </Routes>
    </Router>);

// Create a root and render the component
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello World</h1>);