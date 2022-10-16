import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layouts/Main';
import ProductDetail from './components/ProductDetails/ProductDetail';
import app from './firebase/firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import { useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const hadleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      setUser(user);
    })
    .catch( error =>{
      console.error('error: ', error)
    })
    console.log('google comming soon')
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then( () =>{
      setUser({})
    })
    .catch( () => {
      setUser({})
    })
  }

  const handleGithubSignIn = () => {
    console.log('clicked')
    signInWithPopup(auth, gitProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user)
    })
    .catch( error => {
      console.log('error: ', error)
    })
  }

  const router = createBrowserRouter([
    {
      path : '/' ,
      element : <Main 
        hadleGoogleSignIn={hadleGoogleSignIn}
        handleSignOut={handleSignOut}
        handleGithubSignIn={handleGithubSignIn}
        user={user}
       ></Main>,
      children : [
        {
          path: "/", 
          loader: async () => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
          },         
          element: <Home user={user} ></Home>,
        },{
          path: "/about",
          element: <About></About>,
        },{
          path : '/login',
          element:<LogIn></LogIn>
        },{
          path : '/register',
          element:<Register></Register>
        },
        {
          path: "/products",
          loader: async () => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
          },
          element: <Products></Products>,
        },{
          path : '/product/:productId',
          loader : async ({params}) =>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productId}`)
          },
          element: <ProductDetail></ProductDetail>
        }
      ]
    }
    
  ]);
  return (
    <div className="App">
        <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
