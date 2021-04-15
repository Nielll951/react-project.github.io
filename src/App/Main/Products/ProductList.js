import React from 'react'
import ProductListItem from './ProductListItem'

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
                        <div className="col-xs-12 col-s-6 col-md-4">
                            <ProductListItem
                                name="ORGANIC CABBAGE/TIPS & GUIDES"
                                title="Tips for Ripening your Fruit"
                                description="Cabbage (comprising several cultivars of Brassica oleracea) is a leafy green, red (purple), or white (pale green) biennial plant"
                                date="07"
                                month="Nov"
                            />
                        </div>
                        <div className="col-xs-12 col-s-6 col-md-4">
                            <ProductListItem
                                name="ORGANIC PUMPKIN/TIPS & GUIDES"
                                title="Health Benefits of a Raw Food"
                                description="A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep ye"
                                date="11"
                                month="Oct"
                            />
                        </div>
                        <div className="col-xs-12 col-s-6 col-md-4">
                            <ProductListItem
                                name="ORGANIC WHEAT/TIPS & GUIDES"
                                title="Superfoods you should eat"
                                description="Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species "
                                date="25"
                                month="Sep"
                            />
                        </div>
                    </div>
                </div>
            </section> 
            <div className="product-list"></div>
        </>
    )
}

export default ProductList