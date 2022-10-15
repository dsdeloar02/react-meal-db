import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = ({hadleGoogleSignIn, handleSignOut, user, handleGithubSignIn}) => {
    return (
        <div>
            <Header hadleGoogleSignIn={hadleGoogleSignIn} handleSignOut={handleSignOut} handleGithubSignIn={handleGithubSignIn} user={user} ></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;
