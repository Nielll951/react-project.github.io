import React from 'react'

const ProductListItem = () => {
    return (
        <div className="product-list-item">
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
    )
}

export default ProductListItem