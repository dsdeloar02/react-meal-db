import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({
  hadleGoogleSignIn,
  handleSignOut,
  user,
  handleGithubSignIn,
}) => {
  let Links = [
    { name: "Home", NavLink: "/home" },
    { name: "About", NavLink: "/about" },
    { name: "Products", NavLink: "/products" },
    { name: "Log In", NavLink: "/login" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="navBarWrapper bg-[#2A303C]">
      <div className="container px-4 sm:px-0 py-6 md:flex justify-between mx-auto">
        <div className="flex items-center text-slate-100">
          <h1 className="font-extrabold text-4xl ">MealDb</h1>
        </div>

        <div onClick={() =>setOpen(!open)} className="absolute right-4 top-6 cursor-pointer md:hidden" >
          {
            open ? <XMarkIcon className="h-8 w-8 text-white"/> :  <Bars3Icon className="h-8 w-8 text-white" /> 
          }           
        </div>

        <ul className={`text-white bg-[#2A303C] py-5 md:py-0 md:flex md:justify-end md:items-center absolute w-full left-0 md:static  transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-500px]'}  `}>
          {Links.map((link) => (
            <li className={`mx-2 py-2 px-4 hover:bg-[#6419E6] `}>
              <NavLink to={link.NavLink}>{link.name}</NavLink>
            </li>
          ))}

          {/* <li>
              {user.uid ? (
                <button onClick={handleSignOut}>Sign Out</button>
              ) : (
                <>

                    <button onClick={hadleGoogleSignIn}>Sign In</button>
                    <button onClick={handleGithubSignIn} >Sign In GitHub</button>

                </>
              )}
            </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
