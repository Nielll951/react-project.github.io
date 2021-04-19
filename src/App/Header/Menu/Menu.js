import React, { Component } from 'react'

class Menu extends Component {

    state = {
        showMobileMenu:false, 
    }

    render() {
        return (
            <>
                <div className="menu col-xs-6 col-md-8">
                    <nav className="navigation hidden-menu" >
                        <ul className="menu-list">
                            <li className="menu-item">
                                <a href="/" className="menu-link menu-link-active">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="/" className="menu-link">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="/" className="menu-link">Gallery</a>
                            </li>
                            <li className="menu-item">
                                <a href="/" className="menu-link">Reviews</a>
                            </li>
                            <li className="menu-item">
                                <a href="/" className="menu-link">Blog</a>
                            </li>
                            <li className="menu-item">
                                <a href="/" className="menu-link">Contacts</a>
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
}

export default Menu

// 
