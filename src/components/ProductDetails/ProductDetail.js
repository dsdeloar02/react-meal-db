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
                <h3 className='font-bold text-2xl my-3' >{productses.meals[0].strMeal}</h3>
                <p className='my-2'>{productses.meals[0].strInstructions}</p>
                <button className='my-3 py-2 px-5 bg-[#006400] text-white rounded-md'>
                    Add To Cart 
                </button>
            </div>
            
        </div>
    );
}

export default ProductDetail;
