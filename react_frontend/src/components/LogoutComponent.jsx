import React, { Component } from 'react'
import {Link} from "react-router-dom";

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                    <Link to="/login">Log in again</Link>
                </div>
            </>
        )
    }
}

export default LogoutComponent