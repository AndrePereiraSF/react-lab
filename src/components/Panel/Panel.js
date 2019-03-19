import React from 'react'
import './Panel.css'

const Panel = (props) => (
    <div id="loginPanel">
        <p id='title'>{props.title}</p>
        {props.children}
    </div>
)

export default Panel