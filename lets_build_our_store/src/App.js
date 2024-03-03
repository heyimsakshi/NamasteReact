import React ,{ lazy, Suspense, useEffect } from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header";
import Body  from "./components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {useState,useEffect} from "react";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import CartNew from "./components/CartNew";
//import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery") );


const AppLayout= () => {
    const[userName,setUserName]=useState();
    useEffect(()=>{
       // Make an Api call and send userName and paas 
       const data={
        name:"Sakshi Agrawal"
       };
       setUserName(data.name);
    },[]);

    return (
        // the value of logged in user is changed in the whole app 
        // <UserContext.Provider value={{loggedInUser:userName}}>
        // <div className="app">
        //     <Header/>
        //     {/* This loads the component acording to the path */}
        //     <Outlet/>
        // </div>
        // </UserContext.Provider>
       
        // only the value of header will change in the app else everywhere its default value 
        //  <div className="app">
        //       <UserContext.Provider value={{loggedInUser:userName}}>
        //      <Header/>
        //      </UserContext.Provider>
        //      {/* This loads the component acording to the path */}
        //      <Outlet/>
        //  </div>


        //header will be chnaged with elon musk and globally any other place it will be replaced with sakshi
        // we have paased setusername so that we can use this app state and chnage the value of userName by 
        //other compoent on the fly but header component wont be affected
        //the setusername is used in the body component to update the username in real time across the app

        //default User
    // <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    //     {/* Sakshi */}
    //     <div className="app">
    //     <UserContext.Provider value={{loggedInUser:"Musk"}}>
    //         {/* inside header is musk */}
    //     <Header/>
    //     </UserContext.Provider>
    //     {/* This loads the component acording to the path */}
    //     <Outlet/>
    //     </div>
    //</UserContext.Provider>  

    // redux store implementation starts
    <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
     {/* Sakshi */}
     <div className="app">
     <UserContext.Provider value={{loggedInUser:"Musk"}}>
         {/* inside header is musk */}
     <Header/>
     </UserContext.Provider>
     {/* This loads the component acording to the path */}
     <Outlet/>
     </div>
    </UserContext.Provider> 
 </Provider> 
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
            },
            {
                path:'/Cart',
                element:<CartNew/>
            },

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
