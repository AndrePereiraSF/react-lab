import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'

// This const is the only user that can log into the app.
const user = {
    username: "admin",
    password: "1234",
}

// This function save the user information to 'simulate' a kind of login session.
function auth() {
    let formUsername = document.getElementById('username').value
    let formPassword = document.getElementById('password').value

    if (formUsername === user.username && formPassword === user.password) {
        sessionStorage.setItem('isLogged', true)
        sessionStorage.setItem('user', formUsername)
    } else {
        alert('Credenciais incorretas.')
    }
}

// A simple login form. Note that it calls auth() when clicking the button.
const LoginForm = () => (
    <form id="loginForm">
        <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter Username" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" />
        </div>
        <Link type="submit" class="btn btn-success d-block" onClick={auth} to='/login'>Login</Link>
    </form>
)

export default LoginForm