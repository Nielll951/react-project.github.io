import React from 'react'

const Header = () => {
	return (
			<header className="header">
				<div className="container-fluid">
					<div className="row header-row">
						<div className="logo col-xs-6 col-md-2">
							<a href="/" className="logo-link">
								<img src="images/logo.png" alt="logo" className="img-fluid"/>
							</a>
						</div>
						<div className="menu col-xs-6 col-md-8">
							<nav className="navigation hidden-menu">
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
					</div>
				</div>
    		</header>
	)
}

export default Header