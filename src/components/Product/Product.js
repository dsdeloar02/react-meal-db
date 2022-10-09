import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { idMeal, strMealThumb, strMeal } = product;
  
  return (
    <div className="singleProductWrap">
      <img src={strMealThumb} alt="" />
      <p>{strMeal}</p>

      {/* <p>
        <Link to={`/product/${idMeal}`}>Product Id = {idMeal}</Link>
      </p> */}
      <button><Link to={`/product/${idMeal}`}>View Details</Link></button>
    </div>
  );
};

export default Product;
