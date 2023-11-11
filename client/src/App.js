import React from 'react';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { productData } from './api/Api';
import Cart from './Pages/Cart';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
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
        path: "/cart",
        element: <Cart />,
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
