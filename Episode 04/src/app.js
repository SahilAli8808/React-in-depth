// importing react from node_module as React
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import About from './components/About'
import Error from './components/Error';
import Contact from './components/Contact';


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
      
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/about",
                element: <About />
            },
           
            {
                path: "/contact",
                element: <Contact />
            },


        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

