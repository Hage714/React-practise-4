import React from 'react'
import "../css/navbar.css";

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <h1>Counter App</h1>
            </div>
            <div className='navbar-right'>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Hello, {props.name}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
