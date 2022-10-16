import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = ({ user }) => {
  const totalProducts = useLoaderData().meals;
  const products = totalProducts.slice(3)
  console.log(totalProducts.slice(3));
  return (
    <div>
      <div className="my-5">
        <div className="carousel w-full h-[500px]">
          {
            products.map( product => <Slider
              key={product.idMeal}
              product={product}
              ></Slider> )
          }
        </div>
        <div>

        <div className="productsWrapper">
                <h1 className="font-bold text-3xl mb-3" > All Produts </h1>
                <div className='productWrapper'>
                    {
                        products.map(product => <Product
                        key={product.idMeal}
                        product={product}
                        ></Product> )
                    }
                </div>
                <button className="btn btn-primary mt-5">
                   Show All
                </button>
            </div>
        </div>

        {/* <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          {user.uid && (
            <div className="userDetails">
              <h3>User Name : {user.displayName}</h3>
              <p>Email adress : {user.email}</p>
              <img src={user.photoURL} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
