import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Filter from '../Pages/Filter';

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:"/filter",
            element:<Filter></Filter>
        }
      ]
    },
  ]);
export default router;