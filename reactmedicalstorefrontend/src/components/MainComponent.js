import React, { Component } from "react"; // Import Component
import Overlay from "./Overlay"; // Import the Overlay component
import Navbar from "./Navbar"; // Import the Navbar component
import Sidebar from "./Sidebar"; // Import the Sidebar component
// import HomeComponents from "./HomeComponents";
import GoogleFontLoader from 'react-google-font-loader';
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyClass: "theme-red ls-closed",
            displayOverlay: "none",
            width: window.innerWidth,
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    onBarClick = () => {
        const { bodyClass, displayOverlay } = this.state;
        this.setState({
            bodyClass:
                bodyClass === "theme-red ls-closed overlay-open"
                    ? "theme-red ls-closed"
                    : "theme-red ls-closed overlay-open",
            displayOverlay: displayOverlay === "block" ? "none" : "block",
        });
    };

    render() {
        const { bodyClass, displayOverlay, width } = this.state;

        // Set body class based on screen width
        const rootClassName = width > 1150 ? "theme-red" : bodyClass;

        return (
            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        { font: "Roboto", weights: [400, 700] },
                        { font: "Material+Icons" },
                    ]}
                />
                {/* <div id="root" className={rootClassName}> */}
                    <Overlay display={displayOverlay} />
                    <Navbar onBarClick={this.onBarClick} />
                    <Sidebar />
                    <> {this.props.page} </>
                {/* </div> */}
            </React.Fragment>
        );
    }
}

export default MainComponent;
