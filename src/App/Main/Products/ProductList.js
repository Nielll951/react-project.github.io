import React from 'react'

const ProductList = () => {
    return (
        <section className="post section section--no-pb">
            <div className="container">
                <div className="row">
                    <div className="section-heading section-heading--center">
                        <h2 className="__title">Blog
                            <span>Posts</span>
                        </h2>
                        <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                    </div>
                </div>
                <div className="row post-row">
                    <div className="col-xs-12 col-s-6 col-md-4">
                        <div className="post-item">
                            <div className="post-item-image-block">
                                <img src="images/post1.jpg" alt="post-img" className="post-item-img"/>
                            </div>
                            <div className="post-item-content">
                                <p className="category">
                                    <a href="/">ORGANIC FOOD/TIPS & GUIDES</a>
                                </p>
                                <h3 className="post-title">
                                    <a href="/">Tips for Ripening your Fruit</a>
                                </h3>
                                <p className="post-text">
                                    The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                </p>
                                <a className="custom-btn custom-btn--medium post-btn hover" href="/">Read more</a>
                            </div>
                            <span className="__date-post">
                                <strong>07</strong>
                                Nov
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-12 col-s-6 col-md-4">
                        <div className="post-item">
                            <div className="post-item-image-block">
                                <img src="images/post2.jpg" alt="post-img" className="post-item-img"/>
                            </div>
                            <div className="post-item-content">
                                <p className="category">
                                    <a href="/">ORGANIC FOOD/TIPS & GUIDES</a>
                                </p>
                                <h3 className="post-title">
                                    <a href="/">Tips for Ripening your Fruit</a>
                                </h3>
                                <p className="post-text">
                                    The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                </p>
                                <a className="custom-btn custom-btn--medium post-btn hover" href="/">Read more</a>
                            </div>
                            <span className="__date-post">
                                <strong>03</strong>
                                Nov
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-12 col-s-6 col-md-4">
                        <div className="post-item">
                            <div className="post-item-image-block">
                                <img src="images/post3.jpg" alt="post-img" className="post-item-img add-height"/>
                            </div>
                            <div className="post-item-content">
                                <p className="category">
                                    <a href="/">ORGANIC FOOD/TIPS & GUIDES</a>
                                </p>
                                <h3 className="post-title">
                                    <a href="/">Tips for Ripening your Fruit</a>
                                </h3>
                                <p className="post-text">
                                    The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                </p>
                                <a className="custom-btn custom-btn--medium post-btn hover" href="/">Read more</a>
                            </div>
                            <span className="__date-post">
                                <strong>25</strong>
                                Oct
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default ProductList