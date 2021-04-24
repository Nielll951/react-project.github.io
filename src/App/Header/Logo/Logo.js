import React from 'react'
import {Link} from 'react-router-dom'

import logo from "./logo.png"

const Logo = () => {
    return (
        <div className="logo col-xs-6 col-md-2">
            <Link to="/" className="logo-link">
                <img src={logo} alt="logo" className="img-fluid"/>
            </Link>
        </div> 
    )
}

export default Logo