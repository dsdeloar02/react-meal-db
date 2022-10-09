import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='navBarWrapper'>
            <div className="navBar">
                <div className="navLogo">
                    <h1>MealDb</h1>
                </div>
                <div className="navItem">
                    <ul>
                        <li>
                            <Link to='/' >Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;
