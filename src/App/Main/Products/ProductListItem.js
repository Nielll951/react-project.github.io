import React from 'react'

const ProductListItem = (props) => {
    return (
        <div className="product-list-item">
            <div className="post-item">
                <div className="post-item-image-block">
                    <img src="images/post1.jpg" alt="post-img" className="post-item-img"/>
                </div>
                <div className="post-item-content">
                    <p className="category">
                        <a href="/">{props.name}</a>
                    </p>
                    <h3 className="post-title">
                        <a href="/">{props.title}</a>
                    </h3>
                    <p className="post-text">
                        {props.description}
                    </p>
                    <a className="custom-btn custom-btn--medium post-btn hover" href="/">Read more</a>
                </div>
                <span className="__date-post">
                    <strong>{props.date}</strong>
                    {props.month}
                </span>
            </div>
        </div>
    )
}

export default ProductListItem