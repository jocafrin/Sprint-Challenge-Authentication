import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
 class Register extends Component {
    state = {
        username: '',
        password: ''
    };
     inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
     submitHandler = e => {
        e.preventDefault();
        axios
        .post('http://localhost:3300/api/register', this.state)
        .then(res => {
            console.log('response', res)
            const {token} = res.data;
            localStorage.setItem('token', token);
            this.props.history.push('/jokes');
        })
        .catch(err => {
            console.error('Axios error:', err);
        });
    }
   render() {
    return (
      <div className="outer-div">
        <div className="link-buttons">
            <Link to={`/`}>Sign In</Link>
            <Link to={`/signup`}>Become a Member</Link>
        </div>
        <div className="inner-div">
            <form className="form-div" onSubmit={this.submitHandler}>
                <input
                value={this.state.username}
                onChange={this.inputChangeHandler}
                type="text"
                placeholder="username"
                name="username"
                />
                <input
                value={this.state.password}
                onChange={this.inputChangeHandler}
                type="password"
                placeholder="password"
                name="password"
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
      </div>
    );
  }
 }
 export default Register;
