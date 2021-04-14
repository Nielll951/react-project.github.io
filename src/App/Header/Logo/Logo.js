import React from 'react'

import logo from "./logo.png"

const Logo = () => {
    return (
        <div className="logo col-xs-6 col-md-2">
            <a href="/" className="logo-link">
                <img src={logo} alt="logo" className="img-fluid"/>
            </a>
        </div> 
    )
}

export default Logo