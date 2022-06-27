import React, { Component } from 'react'
import DataService from '../services/DataService';
import '../css/components.css';
import AuthenticationService from '../services/AuthenticationService.js';

class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            repeatedpassword:'',
            sex: '',
            email: '',
            age:'',
            isUsernameValid: true,
            isEmailValid:true,
            isSexValid:true,
            isAgeValid:true,
            isPasswordValid:true,
            isRepeatedPasswordValid:true,
            isUsernameUsed:false,
            isEmailUsed:false
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.SignupClicked = this.SignupClicked.bind(this)
    }

    handleChange = (event)=>{
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    SignupClicked = ()=> {
        let username = this.state.username;
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if (username.length<6 || !usernameRegex.test(username)){
            this.setState({isUsernameValid:false});
        }
        else {
            this.setState({isUsernameValid:true});
        }

        let email = this.state.email;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!emailRegex.test(email)){
            this.setState({isEmailValid:false});
        }
        else {
            this.setState({isEmailValid:true});
        }

        let sex = this.state.sex;
        if (sex===""){
            this.setState({isSexValid:false});
        }
        else {
            this.setState({isSexValid:true});
        }

        let age = this.state.age;
        if(!/^[0-9]+$/.test(age)){
            this.setState({isAgeValid:false});
        }
        else {
            this.setState({isAgeValid:true});
        }

        let password = this.state.password;
        if (password.length<6){
            this.setState({isPasswordValid:false});
        }
        else {
            this.setState({isPasswordValid:true});
        }

        let repeatedpassword = this.state.repeatedpassword;
        if (repeatedpassword!==password){
            this.setState({isRepeatedPasswordValid:false});
        }
        else {
            this.setState({isRepeatedPasswordValid:true});
        }

        if (this.state.isUsernameValid && this.state.isEmailValid && this.state.isSexValid 
            && this.state.isAgeValid && this.state.isPasswordValid && this.state.isRepeatedPasswordValid)
        {
            let user = {username: this.state.username, sex:this.state.sex, age: this.state.age,
                        email: this.state.email, password: this.state.password};

            AuthenticationService.checkUsername(user).then((response)=>{
                this.setState({isUsernameUsed: response.data},() => {                              
                    console.log(this.state.isUsernameUsed)});
            })

            AuthenticationService.checkEmail(user).then((response)=>{
                this.setState({isEmailUsed: response.data},() => {                              
                    console.log(this.state.isEmailUsed)});
            })

            if (!this.state.isEmailUsed && !this.state.isUsernameUsed){
                console.log(user);
                AuthenticationService.registerUser(user).then((response)=>{
                    console.log(response);
                });
                this.props.navigate(`/welcome/${this.state.username}`)
            }
        }
    }

    componentDidMount(){
        
    }
    render() {
        return (
            <div className="app container">   
                {/* <div className='signup'>
                    <h1>Sign Up</h1>
                </div>*/}
                
                <div className="row">
                    <div className="col-sm-3">
                      <label>User Name</label>
                      <input type="text" className="form-control" name="username" 
                             value={this.state.username} onChange={this.handleChange} /></div>
                    <div className="col-sm-6">
                      {!this.state.isUsernameValid && <div className="alert">Invalid Username</div>}
                      {this.state.isUsernameUsed && <div className="alert">Username alreday exist</div>}
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm-3">
                      <label>Email</label>
                      <input type="text" className="form-control" name="email"
                             value={this.state.email} onChange={this.handleChange}/> 
                    </div>
                    <div className="col-sm-6">
                      {!this.state.isEmailValid && <div className="alert">Invalid Email</div>}
                      {this.state.isEmailUsed && <div className="alert">Email already exist</div>}
                    </div>
                </div>                
                <div className="row">
                    <div className="col-sm-3">
                        <label id="sex">Gender </label>
                        <label>
                            <select name="sex" value={this.state.sex} onChange={this.handleChange}>
                                    <option value="">Please choose one</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-sm-6">
                      {!this.state.isSexValid && <div className="alert">Invalid Gender</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                      <label>Age</label>
                      <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange}/> 
                    </div>
                    <div className="col-sm-6">
                      {!this.state.isAgeValid && <div className="alert">Invalid Age</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/> 
                    </div>
                    <div className="col-sm-6">
                      {!this.state.isPasswordValid && <div className="alert">Password needs at least 6 characters</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                      <label>Confirm password</label>
                      <input type="password" className="form-control" name="repeatedpassword" value={this.state.repeatedpassword} onChange={this.handleChange}/> 
                    </div>
                    <div className="col-sm-6">
                      {!this.state.isRepeatedPasswordValid && <div className="alert">Password not match!</div>}
                    </div>
                </div>
                <div className='submit'>
                    <button onClick={this.SignupClicked}>submit</button> 
                </div>                              
            </div>
        )
    }
}

export default Signup