// import React from "react";
import React, { Component } from "react"; // Import both React and Component
import Overlay from "./Overlay"; // Import the Overlay component
import HomeComponets from "./HomeComponents"; // Import the Homecomponets
import Navbar from "./Navbar"; //Import the Navbar component
import Sidebar from "./Sidebar"; //Import the Sidebar component

import GoogleFontLoader from 'react-google-font-loader';
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends Component {
    render() {
        document.getElementById("root").className = "theme-red"

        return <React.Fragment>
                <GoogleFontLoader
                fonts={[
                    {
                        font: 'Roboto',
                        weights: [400, 700],
                    } 
                ]}
                subsets={['latin', 'cyrillic-ext']} 
                />

                <GoogleFontLoader
                fonts={[
                    {
                    font: 'Material+Icons'            
                    } 
                ]}
                />

            <Overlay/>
            <Navbar/>
            <Sidebar/>
            <HomeComponets/>
        </React.Fragment>
    }
}

export default MainComponent; 