import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layouts/Main';
import ProductDetail from './components/ProductDetails/ProductDetail';

function App() {
  const router = createBrowserRouter([
    {
      path : '/' ,
      element : <Main></Main>,
      children : [
        {
          path: "/",
          
          element: <Home></Home>,
        },{
          path: "/about",
          element: <About></About>,
        },{
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
