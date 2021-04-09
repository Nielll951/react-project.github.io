import React from "react"
import ReactDOM from "react-dom"

const App = () => {
	return (
		<>
			<header class="header">
				<div class="container-fluid">
					<div class="row header-row">
						<div class="logo col-xs-6 col-md-2">
							<a href="#" class="logo-link">
								<img src="images/logo.png" alt="logo" class="img-fluid"/>
							</a>
						</div>
						<div class="menu col-xs-6 col-md-8">
							<nav class="navigation hidden-menu">
								<ul class="menu-list">
									<li class="menu-item">
										<a href="#" class="menu-link menu-link-active">Home</a>
									</li>
									<li class="menu-item">
										<a href="#" class="menu-link">About</a>
									</li>
									<li class="menu-item">
										<a href="#" class="menu-link">Gallery</a>
									</li>
									<li class="menu-item">
										<a href="#" class="menu-link">Reviews</a>
									</li>
									<li class="menu-item">
										<a href="#" class="menu-link">Blog</a>
									</li>
									<li class="menu-item">
										<a href="#" class="menu-link">Contacts</a>
									</li>
								</ul>
							</nav>
							<div class="nav-mobile-menu">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<div class="header__btn col-md-2">
							<a href="" class="btn get-in-touch-btn">Get in touch</a>
						</div>
					</div>
				</div>
    		</header>
			<main class="main">
				<section class="slider pos-rel">
					<div class="container">
						<div class="row slider-row">
							<div class="slider-content">
								<div class="col-xs-12 col-sm-10 col-lg-8" data-scroll-discover="true">
									<p class="name">Agro</p>
									<h2 class="title text-white">Farming company</h2>
									<p class="text-center">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
									</p>
									<div class="slider__btn">
										<a href="#" class=" btn btn-discover">discover</a>
									</div>
									<div class="slider__btn_space-below"></div>
								</div>
							</div>
						</div>
					</div>
					<span class="scroll-discover"></span>
				</section>  
				<section class="section special-offers">
					<div class="container">
						<div class="row row-special">
							<div class="section-heading section-heading--center">
								<h2 class="__title">Special
									<span>Offers</span>
								</h2>
								<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
							</div>
						</div>
						<div class="row services-row">
							<div class="services-item col-xs-6 col-sm-4 col-md-2">
								<img src="images/service1.png" class="service-img" alt="service-img"/>
								<h5 class="title__h5">Farm Livestock</h5>
							</div>
							<div class="services-item col-xs-6 col-sm-4 col-md-2">
								<img src="images/service2.png" class="service-img" alt="service-img"/>
								<h5 class="title__h5">Garden Tillage</h5>                    
							</div>
							<div class="services-item col-xs-6 col-sm-4 col-md-2">
								<img src="images/service3.png" class="service-img" alt="service-img"/>
								<h5 class="title__h5">Fresh Fruits</h5>                    
							</div>
							<div class="services-item col-xs-6 col-sm-4 col-md-2">
								<img src="images/service4.png" class="service-img" alt="service-img"/>
								<h5 class="title__h5">Vegetables</h5>                    
							</div>
							<div class="services-item col-xs-6 col-sm-4 col-md-2">
								<img src="images/service5.png" class="service-img" alt="service-img"/>
								<h5 class="title__h5">Awesome Wheats</h5>                    
							</div>
							<div class="services-item col-xs-6 col-sm-4 col-md-2">
								<img src="images/service6.png" class="service-img" alt="service-img"/>
								<h5 class="title__h5">Agro Machinery</h5>   
			                </div>
						</div>
					</div>
				</section> 
				<section class="section special-products">
					<div class="container">
						<div class="row special-products-row">
							<div class="special-offer col-xs-12">
								<h2 class="special-offer__h2">Special products for most people</h2>
							</div>
						</div>
					</div>
				</section>  
				<section class="section about-agro">
					<div class="container">
						<div class="row align-items-center agro-bg-img">
							<div class="col-xs-12 col-sm-12 col-md-4">
								<div class="section-heading">
									<h2 class="__title">About agro
										<span>farm company</span>
									</h2>
								</div>
								<div class="about__btn-container">
									<a href="" class="about__btn hover">More about</a>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4">
								<img src="images/about-weat.png" alt="about-img" class="about__img"/>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-4 col-about__text">
								<div class="about__text">
									<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
									</p>
									<p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>   
				<section class="section section-yellow section--gutter">
					<div class="container">
						<div class="counter">
							<div class="__inner">
								<div class="row justify-content-sm-center">
									<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
										<div class="__item">
											<div class="d-table">
												<div class="d-table-cell align-middle">
													<div class="__ico">
														<img class="img-fluid" src="images/ico_count_1.png" alt="products"/>
													</div>
												</div>
												<div class="d-table-cell align-middle">
													<p class="__count">19500</p>
													<p class="__title">Tons of harvesta</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
										<div class="__item">
											<div class="d-table">
												<div class="d-table-cell align-middle">
													<div class="__ico">
														<img class="img-fluid" src="images/ico_count_2.png" alt="products"/>
													</div>
												</div>
												<div class="d-table-cell align-middle">
													<p class="__count">2720</p>
													<p class="__title">Units of Cattle</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
										<div class="__item">
											<div class="d-table">
												<div class="d-table-cell align-middle">
													<div class="__ico">
														<img class="img-fluid" src="images/ico_count_3.png" alt="products"/>
													</div>
												</div>
												<div class="d-table-cell align-middle">
													<p class="__count">10000</p>
													<p class="__title">Hectares of farm</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
										<div class="__item">
											<div class="d-table">
												<div class="d-table-cell align-middle">
													<div class="__ico">
														<img class="img-fluid" src="images/ico_count_4.png" alt="products"/>
													</div>
												</div>
												<div class="d-table-cell align-middle">
													<p class="__count">128</p>
													<p class="__title">Units of technic</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> 
				<section class="section we-are">
					<div class="container">
						<div class="section-heading section-heading--center col-xs-12">
							<h2 class="__title">We are
								<span>On the world</span>
							</h2>
							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div> 
						<div>
							<img src="images/img_world_map.png" alt="map" class="img-fluid"/>
						</div>
					</div>
				</section> 
				<section class="section products section--no-pt section--no-pb section--gutter">
					<div class="container-fluid padding-sm-0">
						<div class="product-preview">
							<div class="__inner">
								<div class="row __inner-row">
									<div class="col-xs-12 col-sm-7 col-md-7 col-lg-6">
										<div class="__item">
											<div class="__intro-text">
												<div class="row ___intro-text-row">
													<div class="col-sm-11">
														<h2>
															agro
															<span>products</span>
														</h2>
														<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looksreasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, ornon-characteristic words etc.
														</p>
														<p>
															<a class="custom-btn custom-btn--medium hover" href="#">all products</a>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 col-sm-5 col-md-5 col-lg-3">
										<div class="__item">
											<figure class="__image">
												<img src="images/product1.jpg" alt="product"/>
											</figure>
											<div class="__content">
												<h3 class="__title">fruits</h3>
											</div>
											<a href="#" class="__link"></a>
										</div>
									</div>
									<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
										<div class="__item">
											<figure class="__image">
												<img src="images/product2.jpg" alt="product"/>
											</figure>
											<div class="__content">
												<h3 class="__title">vegetables</h3>
											</div>
											<a href="#" class="__link"></a>
										</div>
									</div>
									<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
										<div class="__item">
											<figure class="__image">
												<img src="images/product3.jpg" alt="product"/>
											</figure>
											<div class="__content">
												<h3 class="__title">livestock</h3>
											</div>
											<a href="#" class="__link"></a>
										</div>
									</div>
									<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
										<div class="__item">
											<figure class="__image">
												<img src="images/product4.jpg" alt="product"/>
											</figure>
											<div class="__content">
												<h3 class="__title">sunflowers</h3>
											</div>
											<a href="#" class="__link"></a>
										</div>
									</div>
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
										<div class="__item">
											<div class="__content">
												<h2 class="__title-">
													<b class="number12">12</b>Type of
													<br/>
													products
												</h2>
											</div>
											<a class="__link" href="#"></a>
										</div>
									</div>
									<div class="col-xs-12 col-sm-7 col-md-7 col-lg-6 offset-lg-3">
										<div class="__item">
											<figure class="__image">
												<img src="images/product5.jpg" alt="product"/>
											</figure>
											<div class="__content">
												<h3 class="__title">wheat</h3>
											</div>
											<a href="#" class="__link"></a>
										</div>
									</div>
									<div class="col-xs-12 col-sm-5 col-md-5 col-lg-3">
										<div class="__item">
											<figure class="__image">
												<img src="images/product6.jpg" alt="product"/>
											</figure>
											<div class="__content">
												<h3 class="__title">spices</h3>
											</div>
											<a href="#" class="__link"></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> 
				<section class="section section--review people-say mb-100">
					<div class="container">
						<div class="section-heading section-heading--center">
							<h2 class="__title">People say
								<span>about agro</span>
							</h2>
							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>
					</div>
				</section> 
				<section class="section section--no-pt section--no-pb section--gutter">
					<div class="simple-banner">
						<div class="__label d-none d-md-block">
							<div class="d-table m-auto h-100">
								<div class="d-table-cell align-middle">
									<span class="num-1">1</span>
								</div>
								<div class="d-table-cell align-middle">
									<span class="num-2">50$</span>
									<span class="kg">Kg</span>
								</div>
							</div>
						</div>
						<div class="container">
							<div class="row">
								<div class="col-xs-12">
									<div class="__inner">
										<img src="images/logo.png" alt="logo" class="img-fluid"/>
										<div class="row">
											<div class="col-xs-12 col-md-7 col-lg-5">
												<div class="banner-text">
													<h2 class="__title h1">
														<b class="freshApples">Fresh Apples</b>
														<span>in Our Store</span>
													</h2>
													<p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
													<p>
														<a class="custom-btn custom-btn--medium hover" href="#">Buy</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>  
				<section class="post section section--no-pb">
					<div class="container">
						<div class="row">
							<div class="section-heading section-heading--center">
								<h2 class="__title">Blog
									<span>Posts</span>
								</h2>
								<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
							</div>
						</div>
						<div class="row post-row">
							<div class="col-xs-12 col-s-6 col-md-4">
								<div class="post-item">
									<div class="post-item-image-block">
										<img src="images/post1.jpg" alt="post-img" class="post-item-img"/>
									</div>
									<div class="post-item-content">
										<p class="category">
											<a href="#">ORGANIC FOOD/TIPS & GUIDES</a>
										</p>
										<h3 class="post-title">
											<a href="#">Tips for Ripening your Fruit</a>
										</h3>
										<p class="post-text">
											The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
										</p>
										<a class="custom-btn custom-btn--medium post-btn hover" href="#">Read more</a>
									</div>
									<span class="__date-post">
										<strong>07</strong>
										Nov
									</span>
								</div>
							</div>
							<div class="col-xs-12 col-s-6 col-md-4">
								<div class="post-item">
									<div class="post-item-image-block">
										<img src="images/post2.jpg" alt="post-img" class="post-item-img"/>
									</div>
									<div class="post-item-content">
										<p class="category">
											<a href="#">ORGANIC FOOD/TIPS & GUIDES</a>
										</p>
										<h3 class="post-title">
											<a href="#">Tips for Ripening your Fruit</a>
										</h3>
										<p class="post-text">
											The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
										</p>
										<a class="custom-btn custom-btn--medium post-btn hover" href="#">Read more</a>
									</div>
									<span class="__date-post">
										<strong>03</strong>
										Nov
									</span>
								</div>
							</div>
							<div class="col-xs-12 col-s-6 col-md-4">
								<div class="post-item">
									<div class="post-item-image-block">
										<img src="images/post3.jpg" alt="post-img" class="post-item-img add-height"/>
									</div>
									<div class="post-item-content">
										<p class="category">
											<a href="#">ORGANIC FOOD/TIPS & GUIDES</a>
										</p>
										<h3 class="post-title">
											<a href="#">Tips for Ripening your Fruit</a>
										</h3>
										<p class="post-text">
											The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
										</p>
										<a class="custom-btn custom-btn--medium post-btn hover" href="#">Read more</a>
									</div>
									<span class="__date-post">
										<strong>25</strong>
										Oct
									</span>
								</div>
							</div>
						</div>
					</div>
				</section> 
				<section class="section labels">
					<div class="container">
						<div class="row row-labels">
							<div class="col-xs-12 col-s-6 col-md-3">
								<div class="label-item">
									<img class="label-img" src="images/label1.jpg" alt="label"/>
								</div>
							</div>
							<div class="col-xs-12 col-s-6 col-md-3">
								<div class="label-item">
									<img class="label-img" src="images/label2.jpg" alt="label"/>
								</div>
							</div>
							<div class="col-xs-12 col-s-6 col-md-3">
								<div class="label-item">
									<img class="label-img" src="images/label3.jpg" alt="label"/>
								</div>
							</div>
							<div class="col-xs-12 col-s-6 col-md-3">
								<div class="label-item">
									<img class="label-img" src="images/label4.jpg" alt="label"/>
								</div>
							</div>
						</div>
					</div>
				</section>  
				<section class="section contact section--dark-bg ">
					<div class="container">
						<div class="section-heading section-heading--center">
							<h2 class="__title title-white">Get
								<span>in touch</span>
							</h2>
							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>
						<form class="contact-form" action="#">
							<div class="row">
								<div class="col-xs-12 col-sm-6 padding-r-15">
									<div class="input-wrp">
										<input type="text" class="textfield" name="name" placeholder="Name"/>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 padding-l-15">
									<div class="input-wrp">
										<input type="text" class="textfield" name="email" placeholder="E-mail"/>
									</div>
								</div>
							</div>
							<div class="input-wrp">
								<textarea class="textfield" name="message" placeholder="Comments"></textarea>
							</div>
							<button class="custom-btn custom-btn--medium wide" type="submit" role="button">Send</button>
							<div class="form__note"></div>
						</form>
					</div>
				</section>
				<section class="section section--no-pt section--no-pb">
					<div class="map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68780316407!2d30.252511957059642!3d50.4016990487754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1617629358138!5m2!1sru!2sua" width="100%" height="300px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
					</div>
				</section>
			</main>
			<footer class="footer">
				<div class="container">
					<div class="row row-footer">
						<div class="col-xs-12 col-s-auto">
							<div class="footer__item">
								<a href="#" class="site-logo">
									<img src="images/logo.png" alt="logo" class="img-fluid"/>
								</a>
							</div>
						</div>
						<div class="col-xs-12 col-s">
							<div class="row no-gutters align-items-md-center">
								<div class="col-xs-12 col-s">
									<div class="footer__item">
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
								<div class=" social-links col-xs-12 col-md-auto pr-md">
									<a href="#" class="social-link">
										<i class="fa fa-twitter footer-fa"></i>
									</a>
									<a href="#" class="social-link">
										<i class="fa fa-facebook footer-fa"></i>
									</a>
									<a href="#" class="social-link">
										<i class="fa fa-linkedin-square footer-fa"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="col-xs-12 col-md-5 col-lg-4 offset-lg-1">
							<div class="footer__item">
								<h5 class="h6">Get a newsletter</h5>
								<form action="#" class="form--horizontal">
									<div class="input-wrp">
										<input type="text" name="s" class="textfield" placeholder="Your E-mail"/>
									</div>
									<button class="custom-btn custom-btn--medium subscribe-btn hover" type="submit" role="button">subscribe</button>
								</form>
							</div>
						</div>
					</div>
					<div class="row flex-md-row-reverse">
						<div class="col-xs-12 col-md-6">
							<div class="footer__item">
								<nav class="footer__navigation text-md-right">
									<ul>
										<li class="active">
											<a href="#">Home</a>
										</li>
										<li>
											<a href="#">About</a>
										</li>
										<li>
											<a href="#">Pages</a>
										</li>
										<li>
											<a href="#">Gallery</a>
										</li>
										<li>
											<a href="#">Blog</a>
										</li>
										<li>
											<a href="#">Contacts</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div class="col-xs-12 col-md-6">
							<div class="footer__item">
								<span class="__copy">© 2019 Agro. All rights reserved.</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)	
} 


ReactDOM.render(<App/>,document.getElementById("root"))