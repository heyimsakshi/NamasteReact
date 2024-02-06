import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

//RestaurantCard will be build as a separate component as it will be reused


// below export written is named export
export const Body=()=>{
    // state/local variable- super power variable of a component
    //useState returns an object 
     [ListOfRestaurants,setListOfRestaurants]=useState([]); // destructing of an object -js concept
    [listOfFilteredRestaurants,setlistOfFilteredRestaurants]=useState([]);
     [searchText,setSearchText]=useState("")
     useEffect(()=>{
    
      fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456333351378966&lng=78.37263149036954&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
     
         //Optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    };
 
    //conditional rendering
    return ListOfRestaurants?.length===0 ? ( <Shimmer />):
    (
        <div className="body">
            <div className="filter">
            <input type="search" className="search-bar" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button className="search-btn" onClick={()=>{
                  const filteredRestaurants= ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                //console.log(filteredRestaurants);
                    setlistOfFilteredRestaurants(filteredRestaurants)
            }}>search</button>

                <button className="filter-btn" onClick={
                    ()=>{
                        const filteredRestaurants= ListOfRestaurants.filter((res)=>res.info.avgRating >'4');

                        setListOfRestaurants(filteredRestaurants)
                    }

                }> Top Rated Restaurant</button>
            </div>

            <div className="res-container">
               {
              
              listOfFilteredRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                ))
               }
              
            </div>
        </div>
    )
}

// If we write defaulit export below along with named export it will work
export default Body;

