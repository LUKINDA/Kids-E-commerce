import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, 
  Outlet
} from "react-router-dom";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
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
      },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
    ]
  },
  
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
