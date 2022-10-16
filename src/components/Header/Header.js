import React, { useContext, useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Header = () => {

  const { user, logOut }  = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(() => { })
    .catch(err => console.error(err));
  }

  console.log('context', user)

  let Links = [
    { name: "Home", NavLink: "/" },
    { name: "About", NavLink: "/about" },
    { name: "Products", NavLink: "/products" },
    { name: "Cart", NavLink: "/carts" },
    // { name: "Log In", NavLink: "/login" },
  ];

  let [open, setOpen] = useState(false);
  let [popen, setPopen] = useState(false)

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
            <li className={`mx-2 py-2 px-4 hover:bg-[#6419E6]`}>
              <NavLink to={link.NavLink}>{link.name}</NavLink>
            </li>
          ))}
          
          {
            user?.email ? 
              <div onClick={() =>setPopen(!popen)} className='cursor-pointer' >
                <span className="w-10 h-10 flex justify-center items-center bg-green-600 text-white rounded-full" >
                    {user?.email.substring(0,2)}
                </span>
                <div className={`absolute ${popen ? 'top-[72px] right-[34px]' : 'top-[-500px]'}`}>
                  <ul className="bg-black py-4 px-3 rounded-md">
                    <li><button className="btn btn-active btn-secondary">Profile</button></li>  
                    <li className="my-3" ><button onClick={handleSignOut} className="btn btn-active btn-accent">Log Out</button></li>  
                  </ul>  
                </div> 
              </div>
              : <button className="btn btn-primary"><NavLink to='/login'>Log In </NavLink></button>
          }

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
