import React from 'react';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { productData } from './api/Api';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import SingleProduct from './components/SingleProduct';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
        loader: productData,
      },
      {
        path: '/product/:id',
        element: <SingleProduct />

      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,

      },
    ]
  }
])
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
        
    </div>
  );
}

export default App;
