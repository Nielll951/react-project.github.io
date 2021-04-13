import React from 'react'
import logo from ".common/style/images/logo.png";

const Footer = () => {
	return (
			<footer className="footer">
				<div className="container">
					<div className="row row-footer">
						<div className="col-xs-12 col-s-auto">
							<div className="footer__item">
								<a href="/" className="site-logo">{null}
									<img src={logo} alt="logo" className="img-fluid"/>
								</a>
							</div>
						</div>
						<div className="col-xs-12 col-s">
							<div className="row no-gutters align-items-md-center">
								<div className="col-xs-12 col-s">
									<div className="footer__item">
										<address>
											<p>
												523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA
											</p>
											<p>
												+1 (234) 56789,  +1 987 654 3210 
												<br/>
												<a href="mailto:support@agrocompany.com">support@agrocompany.com</a>
											</p>
										</address>
									</div>
								</div>
								<div className=" social-links col-xs-12 col-md-auto pr-md">
									<a href="/" className="social-link">
										<i className="fa fa-twitter footer-fa"></i>
									</a>
									<a href="/" className="social-link">
										<i className="fa fa-facebook footer-fa"></i>
									</a>
									<a href="/" className="social-link">
										<i className="fa fa-linkedin-square footer-fa"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-md-5 col-lg-4 offset-lg-1">
							<div className="footer__item">
								<h5 className="h6">Get a newsletter</h5>
								<form action="#" className="form--horizontal">
									<div className="input-wrp">
										<input type="text" name="s" className="textfield" placeholder="Your E-mail"/>
									</div>
									<button className="custom-btn custom-btn--medium subscribe-btn hover" type="submit">subscribe</button>
								</form>
							</div>
						</div>
					</div>
					<div className="row flex-md-row-reverse">
						<div className="col-xs-12 col-md-6">
							<div className="footer__item">
								<nav className="footer__navigation text-md-right">
									<ul>
										<li className="active">
											<a href="/">Home</a>
										</li>
										<li>
											<a href="/">About</a>
										</li>
										<li>
											<a href="/">Pages</a>
										</li>
										<li>
											<a href="/">Gallery</a>
										</li>
										<li>
											<a href="/">Blog</a>
										</li>
										<li>
											<a href="/">Contacts</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<div className="footer__item">
								<span className="__copy">© 2019 Agro. All rights reserved.</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
	)
}

export default Footer