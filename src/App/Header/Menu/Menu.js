import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {

    return (
        <>
            <div className="menu col-xs-6 col-md-8">
                <nav className="navigation hidden-menu" >
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link to="/" className="menu-link menu-link-active">Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/about" className="menu-link">About</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/gallery" className="menu-link">Gallery</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">Reviews</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/blog" className="menu-link">Blog</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contacts" className="menu-link">Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div className="nav-mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="header__btn col-md-2">
                <a href="/" className="btn get-in-touch-btn">Get in touch</a>
            </div>
        </>
    )
}

export default Menu

// 
