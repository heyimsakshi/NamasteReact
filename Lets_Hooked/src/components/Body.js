import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
//RestaurantCard will be build as a separate component as it will be reused


// below export written is named export
export const Body=()=>{
    // state/local variable- super power variable of a component
    //useState returns an object 
     [ListOfRestaurants,setListOfRestaurants]=useState(resList); // destructing of an object -js concept

    return(
        <div className="body ">
            <div className="filter">
                <button className="filter-btn" onClick={
                    ()=>{
                        const filteredRestaurants= ListOfRestaurants.filter((res)=>res.data.avgRating>'4')
                     setListOfRestaurants(filteredRestaurants)
                    }

                }> Top Rated Restaurant</button>
            </div>
            <div className="res-container">
               
               {
                ListOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
               }
              
            </div>
        </div>
    )
}

// If we write defaulit export below along with named export it will work
export default Body;

