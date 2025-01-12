import React ,{ lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header";
import Body  from "./components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery") );
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
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/Grocery',
                element:(
                    <Suspense fallback={<h1>Loading ... </h1>}>
                        <Grocery />
                    </Suspense>
                )
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
