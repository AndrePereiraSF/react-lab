import React, { Component } from 'react'

import Panel from '../components/Panel/Panel';
import Logged from '../components/Logged/Logged';

class Dashboard extends Component {
    componentWillMount() {
        // This if statement redirects to the correct page to avoid login bugs.
        if (sessionStorage.getItem('isLogged') === 'true' && sessionStorage.getItem('isLogged') !== null) {
            if (window.location.pathname === '/') {
                this.props.history.push("/login")
            }
        } else {
            if (window.location.pathname === '/login') {
                this.props.history.push("/")
            }
        }
    }
    
    render() {
        return (
            <div>
                <Panel title='Dashboard' ><Logged /></ Panel>
            </div>
        )
    }
}

export default Dashboard