import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductList = () => {
    return (
        <>
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
                        {
                            products.map(({
                                id,
                                name,
                                title,
                                description,
                                date,
                                month,
                                image
                            }) => (
                                <ProductListItem
                                    key={id}
                                    name={name}
                                    title={title}
                                    description={description}
                                    date={date}
                                    month={month}
                                    image={image}
                                />
                            ))
                        }   
                    </div>
                </div>
            </section> 
            <div className="product-list"></div>
        </>
    )
}

export default ProductList