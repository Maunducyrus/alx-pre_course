import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from'react-router-dom'

import Login from './pages/Login';
import MainComponent from './components/MainComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route exact path="/" element ={<Login/>}></Route>
            <Route exact path="/home" element={<MainComponent/>}></Route>
            
        </Routes>
    </Router>);

// Create a root and render the component
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello World</h1>);