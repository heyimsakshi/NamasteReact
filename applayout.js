import React from "react"
import ReactDOM from "react-dom/client"

/* 
*Header
*  -logo
*  -Nav Items
*Body
* -Search
* - RestaurantContainer
*    -RestaurantCard
*      -img
*      -name of res, star rating,cuisine,dilevery time 
*
*
*Footer
* - Copyright
* - Address
* -Contact
 */


const Header=()=>{
    return(
         <div className="header">
             <div className="logo-container">
                <img 
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
             </div>

             <div className="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
             </div>
         </div>
    )
}

const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://www.shutterstock.com/shutterstock/photos/2096649406/display_1500/stock-vector-biryani-restaurant-logo-vector-illustration-2096649406.jpg"/>
            <h3>Meghna foods</h3>
            <h4>Biryani, North India</h4>
            <h4>4.3 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

//RestaurantCard will be build as a separate component as it will be reused
const Body=()=>{
    return(
        <div className="body ">
            <div className="search">
                search
            </div>
            <div className="res-container">
               
               <RestaurantCard/> 
               <RestaurantCard/> 
               <RestaurantCard/> 
               <RestaurantCard/> 
               <RestaurantCard/> 
               <RestaurantCard/> 
               <RestaurantCard/> <RestaurantCard/> <RestaurantCard/> <RestaurantCard/> 
            </div>
        </div>
    )
}
const AppLayout= () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
