import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Product from './components/Product';

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
      children:[{
        path:'contact',
        element:<Contact/>
      },
      {
        path:'product',
        element:<Product/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Home/> --- first this was imported later the second one  as 3.5 point i.e. impact outlet to dynamically render components 
  <RouterProvider router={routes}/>
);


