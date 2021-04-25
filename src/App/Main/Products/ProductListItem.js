import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductListItem = ({
    name,
    id,
    title,
    description,
    date,
    month,
    image,
}) => {
    return (
        <div className="product-list-item">
            <div className="post-item">
                <div className="post-item-image-block">
                    <img src={image} alt="post-img" className="post-item-img add-height"/>
                </div>
                <div className="post-item-content">
                    <p className="category">
                        <Link to={`/products/${id}`}>{name}</Link>
                    </p>
                    <h3 className="post-title">
                        <a href="/">{title}</a>
                    </h3>
                    <p className="post-text">
                        {description}
                    </p>
                    <a className="custom-btn custom-btn--medium post-btn hover" href="/">Read more</a>
                </div>
                <span className="__date-post">
                    <strong>{date}</strong>
                    {month}
                </span>
            </div>
        </div>
    )
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
    date:PropTypes.number.isRequired,
    month:PropTypes.string.isRequired,
}

ProductListItem.defaultProps = {
    description:"No description...",
    image:"/ProductsImages/no-image.jpg"
}

export default ProductListItem