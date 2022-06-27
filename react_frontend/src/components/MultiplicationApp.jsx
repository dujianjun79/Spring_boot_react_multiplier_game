import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Calculator from './Calculator'
import LoginComponent from './LoginComponent'
import withNavigation from './WithNavigation'
import ErrorComponent from './ErrorComponent'
import Signup from './Signup'
import HeaderComponent from './headerComponent'
import LogoutComponent from './LogoutComponent'
import AuthenticatedRoute from '../services/AuthenticationRoute'


class MultiplicationApp extends Component {
    
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const SignupComponentWithNavigation = withNavigation(Signup);
        return (
            <div>               
                <Router>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        {/* <AuthenticatedRoute path="/welcome/:username" element={<Calculator />} /> */}
                        <Route path="/welcome/:username" element={<AuthenticatedRoute>
                                                                 <Calculator />
                                                               </AuthenticatedRoute>} /> 
                        <Route path="/signup" element={<SignupComponentWithNavigation />}/>
                        <Route path="/logout" element={<LogoutComponent />} />
                        <Route path="*" element={<ErrorComponent />} />                        
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default MultiplicationApp