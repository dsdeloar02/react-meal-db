import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { idMeal, strMealThumb, strMeal } = product;
  const navigate = useNavigate();
  const handleNavigate = () => {
      navigate(`/product/${idMeal}`)
  }
  
  return (
    <div className="singleProductWrap">
      <img src={strMealThumb} alt="" />
      <p className="py-3">{strMeal}</p>

      {/* <button><Link to={`/product/${idMeal}`}>View Details</Link></button> */}
      <button onClick={handleNavigate} >View Details</button>
    </div>
  );
};

export default Product;
