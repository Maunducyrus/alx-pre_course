// import React from "react";
import React, { Component } from "react"; // Import both React and Component
import Overlay from "./Overlay"; // Import the Overlay component
import HomeComponets from "./HomeComponents"; // Import the Homecomponets
import Navbar from "./Navbar"; //Import the Navbar component
import Sidebar from "./Sidebar"; //Import the Sidebar component

class MainComponent extends Component {
    render() {
        return <React.Fragment>
            <Overlay/>
            <Navbar/>
            <Sidebar/>
            <HomeComponets/>
        </React.Fragment>
    }
}

export default MainComponent; 