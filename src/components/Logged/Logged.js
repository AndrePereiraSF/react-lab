import React from 'react'
import { Link } from 'react-router-dom'
import './Logged.css'

// It cleans the sessionStorage to avoid login bugs.
function logout() {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('isLogged')
}

// This is the content that you see in the Panel when you're logged in.
const Logged = () => (
    <div id="logged">
    <p>Hello, { sessionStorage.getItem('user') }!</p>
    <p>This is your dashboard, and now you're logged in. Here you can do absolutely nothing, enjoy it! :D</p>
    <Link class="btn btn-danger d-block mt-5" onClick={logout} to='/'>Logout</Link>
    </div>
)

export default Logged