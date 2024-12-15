import React from 'react';
import 'adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css'
import 'adminbsb-materialdesign/plugins/node-waves/waves.css';
import 'adminbsb-materialdesign/plugins/animate-css/animate.css';
import 'adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css'
import 'adminbsb-materialdesign/css/style.css'
import GoogleFontLoader from 'react-google-font-loader';




class Login extends React.Component {

    state = {
        username: "",
        password: "",
    }
    saveInputs(event) {
        var key=event.target.name;
        this.setState({[key]: event.target.value});
    }

    formSubmit(event) {
        event.preventDefault();
    }
    render() {

        document.body.className = 'login-page'

        return (
                <React.Fragment>
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

                <div className ="login-box">
                    <div className="logo">
                        {/* <a href="javascript:void(0);">Admin<b>BSB</b></a> */}
                        <small>Medical Store Management System</small>
                    </div>
                    <div className="card">
                        <div className="body">
                            <form id="sign_in" method="POST" onSubmit={this.formSubmit} novalidate="novalidate">
                                <div className="msg">Sign in to start your session</div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">person</i>
                                    </span>
                                    <div className="form-line">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        name="username" 
                                        placeholder="Username" 
                                        required="" 
                                        autofocus 
                                        onChange={this.saveInputs}

                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">lock</i>
                                    </span>
                                    <div className="form-line">
                                        <input 
                                        type="password" 
                                        class="form-control" 
                                        name="password" 
                                        placeholder="Password" 
                                        required 
                                        onChange={this.saveInputs}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 p-t-5">
                                        <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink" />
                                        <label for="rememberme">Remember Me</label>
                                    </div>
                                    <div className="col-xs-4">
                                        <button className="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                                    </div>
                                </div>
                                <div className="row m-t-15 m-b--20">
                                    <div className="col-xs-6">
                                        <a href="sign-up.html">Register Now!</a>
                                    </div>
                                    <div className="col-xs-6 align-right">
                                        <a href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </React.Fragment>
        )
    }

}

export default Login;