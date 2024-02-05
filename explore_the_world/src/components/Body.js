import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

//RestaurantCard will be build as a separate component as it will be reused


// below export written is named export
export const Body=()=>{
    // state/local variable- super power variable of a component
    //useState returns an object 
     [ListOfRestaurants,setListOfRestaurants]=useState([]); // destructing of an object -js concept
    
     useEffect(()=>{
    
      fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456333351378966&lng=78.37263149036954&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
       // console.log(json.data.cards)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
     //  console.log(json);
    };
   // console.log(ListOfRestaurants)
    return ListOfRestaurants?.length===0 ? ( <Shimmer />):
    (
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
               //console.log(ListOfRestaurants)
               
              
               (ListOfRestaurants.length>0) && ListOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                ))
               }
              
            </div>
        </div>
    )
}

// If we write defaulit export below along with named export it will work
export default Body;

