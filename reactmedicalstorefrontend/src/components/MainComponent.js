// import React from "react";
import React, { Component } from "react"; // Import both React and Component
import Overlay from "./Overlay"; // Import the Overlay component
import Navbar from "./Navbar"; //Import the Navbar component
import Sidebar from "./Sidebar"; //Import the Sidebar component
import HomeComponets from "./HomeComponents";
import GoogleFontLoader from 'react-google-font-loader';
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component {
    state = {
        bodyClass: "theme-red ls-closed",
        displayOverlay: "none",
        width: window.screen.width,
    };
    onBarClick =()=>{
        if(this.state.bodyClass == "theme-red ls-closed overlay-open"){
        this.setState({bodyClass: "theme-red ls-closed"});
        this.setState({displayOverlayOpen: "none"});
    }
        else if(this.state.bodyClass == "theme-red ls-closed") {
            this.setState({bodyClass: "theme-red ls-closed overlay-open" });
            this.setState({displayOverlayOpen: "block"});
    }
};

    render() {
            if (window.screen.width > 1150) {
            // if (window.innerWidth > 1150) {
            document.getElementById("root").className = "theme-red"
            } else {
            document.getElementById("root").className = this.state.bodyClass;
        }

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

            <Overlay display={this.state.displayOverlay}/>
            <Navbar onBarClick={this.onBarClick}/>
            <Sidebar/>
            <HomeComponets/>
        </React.Fragment>
    }
}

export default MainComponent; 