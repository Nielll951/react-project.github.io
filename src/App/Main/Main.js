import React from 'react'
import ProductList from "./Products/ProductList"

import logo from "../Header/Logo/logo.png"
import service1 from "./imagesMain/service1.png"
import service2 from "./imagesMain/service2.png"
import service3 from "./imagesMain/service3.png"
import service4 from "./imagesMain/service4.png"
import service5 from "./imagesMain/service5.png"
import service6 from "./imagesMain/service6.png"
import aboutWheat from "./imagesMain/about-wheat.png"
import ico_count_1 from "./imagesMain/ico_count_1.png"
import ico_count_2 from "./imagesMain/ico_count_2.png"
import ico_count_3 from "./imagesMain/ico_count_3.png"
import ico_count_4 from "./imagesMain/ico_count_4.png"
import img_world_map from "./imagesMain/img_world_map.png"
import product1 from "./imagesMain/product1.jpg"
import product2 from "./imagesMain/product2.jpg"
import product3 from "./imagesMain/product3.jpg"
import product4 from "./imagesMain/product4.jpg"
import product5 from "./imagesMain/product5.jpg"
import product6 from "./imagesMain/product6.jpg"
import label1 from "./imagesMain/label1.jpg"
import label2 from "./imagesMain/label2.jpg"
import label3 from "./imagesMain/label3.jpg"
import label4 from "./imagesMain/label4.jpg"
import { Route } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage'
import BlogPage from './BlogPage/BlogPage'
import GalleryPage from './GalleryPage/GalleryPage'
import ContactsPage from './ContactsPage/ContactsPage'
import Slider from './Slider/Slider'
import ProductPage from './ProductPage/ProductPage'

const Main = () => {
	return (
		<main className="main">
			<Route path="/" exact render={() => (
				<>
					<Slider/>
					<section className="section special-offers">
						<div className="container">
							<div className="row row-special">
								<div className="section-heading section-heading--center">
									<h2 className="__title">Special
										<span>Offers</span>
									</h2>
									<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
								</div>
							</div>
							<div className="row services-row">
								<div className="services-item col-xs-6 col-sm-4 col-md-2">
									<img src={service1} className="service-img" alt="service-img"/>
									<h5 className="title__h5">Farm Livestock</h5>
								</div>
								<div className="services-item col-xs-6 col-sm-4 col-md-2">
									<img src={service2} className="service-img" alt="service-img"/>
									<h5 className="title__h5">Garden Tillage</h5>                    
								</div>
								<div className="services-item col-xs-6 col-sm-4 col-md-2">
									<img src={service3} className="service-img" alt="service-img"/>
									<h5 className="title__h5">Fresh Fruits</h5>                    
								</div>
								<div className="services-item col-xs-6 col-sm-4 col-md-2">
									<img src={service4} className="service-img" alt="service-img"/>
									<h5 className="title__h5">Vegetables</h5>                    
								</div>
								<div className="services-item col-xs-6 col-sm-4 col-md-2">
									<img src={service5} className="service-img" alt="service-img"/>
									<h5 className="title__h5">Awesome Wheats</h5>                    
								</div>
								<div className="services-item col-xs-6 col-sm-4 col-md-2">
									<img src={service6} className="service-img" alt="service-img"/>
									<h5 className="title__h5">Agro Machinery</h5>   
								</div>
							</div>
						</div>
					</section> 
					<section className="section special-products">
						<div className="container">
							<div className="row special-products-row">
								<div className="special-offer col-xs-12">
									<h2 className="special-offer__h2">Special products for most people</h2>
								</div>
							</div>
						</div>
					</section>  
					<section className="section about-agro">
						<div className="container">
							<div className="row align-items-center agro-bg-img">
								<div className="col-xs-12 col-sm-12 col-md-4">
									<div className="section-heading">
										<h2 className="__title">About agro
											<span>farm company</span>
										</h2>
									</div>
									<div className="about__btn-container">
										<a href="/" className="about__btn hover">More about</a>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-4">
									<img src={aboutWheat} alt="about-img" className="about__img"/>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-4 col-about__text">
									<div className="about__text">
										<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
										</p>
										<p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>   
					<section className="section section-yellow section--gutter">
						<div className="container">
							<div className="counter">
								<div className="__inner">
									<div className="row justify-content-sm-center">
										<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
											<div className="__item">
												<div className="d-table">
													<div className="d-table-cell align-middle">
														<div className="__ico">
															<img className="img-fluid" src={ico_count_1} alt="products"/>
														</div>
													</div>
													<div className="d-table-cell align-middle">
														<p className="__count">19500</p>
														<p className="__title">Tons of harvesta</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
											<div className="__item">
												<div className="d-table">
													<div className="d-table-cell align-middle">
														<div className="__ico">
															<img className="img-fluid" src={ico_count_2} alt="products"/>
														</div>
													</div>
													<div className="d-table-cell align-middle">
														<p className="__count">2720</p>
														<p className="__title">Units of Cattle</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
											<div className="__item">
												<div className="d-table">
													<div className="d-table-cell align-middle">
														<div className="__ico">
															<img className="img-fluid" src={ico_count_3} alt="products"/>
														</div>
													</div>
													<div className="d-table-cell align-middle">
														<p className="__count">10000</p>
														<p className="__title">Hectares of farm</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
											<div className="__item">
												<div className="d-table">
													<div className="d-table-cell align-middle">
														<div className="__ico">
															<img className="img-fluid" src={ico_count_4} alt="products"/>
														</div>
													</div>
													<div className="d-table-cell align-middle">
														<p className="__count">128</p>
														<p className="__title">Units of technic</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> 
					<section className="section we-are">
						<div className="container">
							<div className="section-heading section-heading--center col-xs-12">
								<h2 className="__title">We are
									<span>On the world</span>
								</h2>
								<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
							</div> 
							<div>
								<img src={img_world_map} alt="map" className="img-fluid"/>
							</div>
						</div>
					</section> 
					<section className="section products section--no-pt section--no-pb section--gutter">
						<div className="container-fluid padding-sm-0">
							<div className="product-preview">
								<div className="__inner">
									<div className="row __inner-row">
										<div className="col-xs-12 col-sm-7 col-md-7 col-lg-6">
											<div className="__item">
												<div className="__intro-text">
													<div className="row ___intro-text-row">
														<div className="col-sm-11">
															<h2 className="_title">
																Agro&nbsp;
																<span>products</span>
															</h2>
															<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looksreasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, ornon-characteristic words etc.
															</p>
															<p>
																<a className="custom-btn custom-btn--medium hover" href="/">all products</a>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xs-12 col-sm-5 col-md-5 col-lg-3">
											<div className="__item">
												<figure className="__image">
													<img src={product1} alt="product"/>
												</figure>
												<div className="__content">
													<h3 className="__title">fruits</h3>
												</div>
												<a href="/" className="__link">{null}</a>
											</div>
										</div>
										<div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
											<div className="__item">
												<figure className="__image">
													<img src={product2} alt="product"/>
												</figure>
												<div className="__content">
													<h3 className="__title">vegetables</h3>
												</div>
												<a href="/" className="__link"> </a>
											</div>
										</div>
										<div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
											<div className="__item">
												<figure className="__image">
													<img src={product3} alt="product"/>
												</figure>
												<div className="__content">
													<h3 className="__title">livestock</h3>
												</div>
												<a href="/" className="__link"> </a>
											</div>
										</div>
										<div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
											<div className="__item">
												<figure className="__image">
													<img src={product4} alt="product"/>
												</figure>
												<div className="__content">
													<h3 className="__title">sunflowers</h3>
												</div>
												<a href="/" className="__link"> </a>
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
											<div className="__item">
												<div className="__content">
													<h2 className="__title-">
														<b className="number12">12</b>Type of
														<br/>
														products
													</h2>
												</div>
												<a className="__link" href="/"> </a>
											</div>
										</div>
										<div className="col-xs-12 col-sm-7 col-md-7 col-lg-6 offset-lg-3">
											<div className="__item">
												<figure className="__image">
													<img src={product5} alt="product"/>
												</figure>
												<div className="__content">
													<h3 className="__title">wheat</h3>
												</div>
												<a href="/" className="__link"> </a>
											</div>
										</div>
										<div className="col-xs-12 col-sm-5 col-md-5 col-lg-3">
											<div className="__item">
												<figure className="__image">
													<img src={product6} alt="product"/>
												</figure>
												<div className="__content">
													<h3 className="__title">spices</h3>
												</div>
												<a href="/" className="__link"> </a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> 
					<section className="section section--review people-say mb-100">
						<div className="container">
							<div className="section-heading section-heading--center">
								<h2 className="__title">People say
									<span>about agro</span>
								</h2>
								<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
							</div>
						</div>
					</section> 
					<section className="section section--no-pt section--no-pb section--gutter">
						<div className="simple-banner">
							<div className="__label d-none d-md-block">
								<div className="d-table m-auto h-100">
									<div className="d-table-cell align-middle">
										<span className="num-1">1</span>
									</div>
									<div className="d-table-cell align-middle">
										<span className="num-2">50$</span>
										<span className="kg">Kg</span>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-xs-12">
										<div className="__inner">
											<img src={logo} alt="logo" className="img-fluid"/>
											<div className="row">
												<div className="col-xs-12 col-md-7 col-lg-5">
													<div className="banner-text">
														<h2 className="__title h1">
															<b className="freshApples">Fresh Apples</b>
															<span>in Our Store</span>
														</h2>
														<p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
														<p>
															<a className="custom-btn custom-btn--medium hover" href="/">Buy</a>
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
					<ProductList/>
					<section className="section labels">
						<div className="container">
							<div className="row row-labels">
								<div className="col-xs-12 col-s-6 col-md-3">
									<div className="label-item">
										<img className="label-img" src={label1} alt="label"/>
									</div>
								</div>
								<div className="col-xs-12 col-s-6 col-md-3">
									<div className="label-item">
										<img className="label-img" src={label2} alt="label"/>
									</div>
								</div>
								<div className="col-xs-12 col-s-6 col-md-3">
									<div className="label-item">
										<img className="label-img" src={label3} alt="label"/>
									</div>
								</div>
								<div className="col-xs-12 col-s-6 col-md-3">
									<div className="label-item">
										<img className="label-img" src={label4} alt="label"/>
									</div>
								</div>
							</div>
						</div>
					</section>  
					<section className="section contact section--dark-bg ">
						<div className="container">
							<div className="section-heading section-heading--center">
								<h2 className="__title title-white">Get
									<span>in touch</span>
								</h2>
								<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
							</div>
							<form className="contact-form" action="#">
								<div className="row">
									<div className="col-xs-12 col-sm-6 padding-r-15">
										<div className="input-wrp">
											<input type="text" className="textfield" name="name" placeholder="Name"/>
										</div>
									</div>
									<div className="col-xs-12 col-sm-6 padding-l-15">
										<div className="input-wrp">
											<input type="text" className="textfield" name="email" placeholder="E-mail"/>
										</div>
									</div>
								</div>
								<div className="input-wrp">
									<textarea className="textfield" name="message" placeholder="Comments"></textarea>
								</div>
								<button className="custom-btn custom-btn--medium wide" type="submit">Send</button>
								<div className="form__note"></div>
							</form>
						</div>
					</section>
					<section className="section section--no-pt section--no-pb">
						<div className="map">
							<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68780316407!2d30.252511957059642!3d50.4016990487754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1617629358138!5m2!1sru!2sua" width="100%" height="300px" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
						</div>
					</section>
				</>
			)}/>
			<Route path="/about" component={AboutPage}/>
			<Route path="/blog" component={BlogPage}/>
			<Route path="/gallery" component={GalleryPage}/>
			<Route path="/contacts" component={ContactsPage}/>
			<Route path="/products/:id" component={ProductPage}/>
		</main>
	)
}

export default Main

					