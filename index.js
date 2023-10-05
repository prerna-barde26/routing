import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";
import Home from "./view/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render
(<RouterProvider router={router} />
);

