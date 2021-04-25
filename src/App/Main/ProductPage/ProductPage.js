import React from 'react'
import products, { getProductsObject } from '../Products/products'

const ProductPage = ({
    match,
    productsObject = getProductsObject(products)
}) => {
    const id = match.params.id
    console.log(match)
    return (
        <>
            <h1 className="page-title">Product Page</h1>
        </>
    )
}

export default ProductPage