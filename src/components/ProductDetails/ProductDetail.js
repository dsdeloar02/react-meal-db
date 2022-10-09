import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const productses = useLoaderData();
    console.log(productses.meals[0])
    return (
        <div>
            <div className="detailsProWrap">
                <img src={productses.meals[0].strMealThumb} alt="" />
                <h3>{productses.meals[0].strMeal}</h3>
                <p>{productses.meals[0].strInstructions}</p>
            </div>
            
        </div>
    );
}

export default ProductDetail;
