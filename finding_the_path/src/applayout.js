import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header";
import Body  from "./components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
const AppLayout= () => {
    return (
        <div className="app">
            <Header/>
            {/* This loads the component acording to the path */}
            <Outlet/>
        </div>
    )
}
const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ],

        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    }
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);