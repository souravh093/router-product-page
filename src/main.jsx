import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Error from './Error/Error';
import Home from './Root/Home/Home';
import Products from './Root/Products/Products';
import About from './Root/About/About';
import ProductDetails from './Root/Products/Product/ProductDetails/ProductDetails';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
