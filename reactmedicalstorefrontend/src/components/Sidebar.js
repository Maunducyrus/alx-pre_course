import React from "react";

class Siderbar extends Component {
    render() {
        return <section>
        <aside id="leftsidebar" className="sidebar">
            <div className="user-info">
                <div className="image">
                    <img src="images/user.png" width="48" height="48" alt="User"/>
                </div>
                <div className="info-container">
                    <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                    <div className="email">john.doe@example.com</div>
                    <div className="btn-group user-helper-dropdown">
                        <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul className="dropdown-menu pull-right">
                            <li>
                            <a href="javascript:void(0);" className=" waves-effect waves-block"><i className="material-icons">input</i>Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 334px;"><ul className="list" style="overflow: hidden; width: auto; height: 334px;">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active">
                        <a href="index.html" className="toggled waves-effect waves-block">
                            <i className="material-icons">home</i>
                            <span>Home</span>
                        </a>
                    </li>
                </ul>
                <div className="slimScrollBar" style="background: rgba(0, 0, 0, 0.5); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 0px; z-index: 99; right: 1px; height: 119.953px;"></div><div className="slimScrollRail" style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 0px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
            </div>
           
            <div className="legal">
                <div className="copyright">
                    © 2016 - 2017 <a href="javascript:void(0);">AdminBSB - Material Design</a>.
                </div>
                <div className="version">
                    <b>Version: </b> 1.0.5
                </div>
            </div>
        </aside>
        
    </section>
    }
}

export default Siderbar; 