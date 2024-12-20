// import React from "react";
import React, { Component } from "react"; // Import both React and Component
import Overlay from "./Overlay"; // Import the Overlay component

class MainComponent extends Component {
    render() {
        return <React.Fragment>
            <Overlay/>
        </React.Fragment>
    }
}

export default MainComponent; 