import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="productsWrapper">
                <h1>This is Products Details Page</h1>
                <div className='productWrapper'>
                    {
                        products.meals.map(product => <Product
                        key={product.idMeal}
                        product={product}
                        ></Product> )
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;
