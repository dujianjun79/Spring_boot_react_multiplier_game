import React, { Component } from 'react'
import {
    BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import DataService from '../services/DataService'
import withNavigation from './WithNavigation'
import AuthenticationService from '../services/AuthenticationService.js';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'Daniel',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        if (this.state.username==="Daniel" && this.state.password==="123456"){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)
        }

    }

    render() {
        return (
            <div className='app'>
                {/* <h1>Login</h1> */}
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div className='row'>
                        <label>User Name: </label>
                        <div className='col-sm-3'>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='row'>
                        <label>Password: </label>
                        <div className='col-sm-3'>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='submit'>
                        <button className="btn btn-secondary" onClick={this.loginClicked}>Login</button>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default LoginComponent