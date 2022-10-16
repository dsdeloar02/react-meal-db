import React from 'react';
import fishOne from '../../images/fishOne.jfif';
import fishTwo from '../../images/fishTwo.jpg';
import fishThree from '../../images/fishThree.jpg';

const Slider = ({product}) => {
    const { idMeal, strMealThumb, strMeal } = product;
    return (
        <>
        <div id="slide1" className="carousel-item relative w-full">
             <img src={fishOne} alt="" className="w-full object-cover" />   
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src={fishTwo} alt="" className="w-full object-cover" /> 
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={fishThree} alt="" className="w-full object-cover" /> 
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <img src={fishOne} alt="" className="w-full object-cover"  /> 
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </>
    );
}

export default Slider;
