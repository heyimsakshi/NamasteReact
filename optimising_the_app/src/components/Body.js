import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
//RestaurantCard will be build as a separate component as it will be reused


// below export written is named export
export const Body=()=>{
    // state/local variable- super power variable of a component
    //useState returns an object 
     [ListOfRestaurants,setListOfRestaurants]=useState([]); // destructing of an object -js concept

    [listOfFilteredRestaurants,setlistOfFilteredRestaurants]=useState([]);

     [searchText,setSearchText]=useState("")

     const onlineStatus=useOnlineStatus();
    
    const resList=useRestaurantData();
    
    useEffect(()=>{
        if(resList){
            setListOfRestaurants(resList);
            setlistOfFilteredRestaurants(resList);
        }
    },[resList])
    
if(onlineStatus==false){
    return (
        <div>You are currently offline </div>
    )
}
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
                    listOfFilteredRestaurants.map((restaurant) => 
                        <Link 
                            to={"/restaurant/" + restaurant?.info?.id}
                            key={ restaurant?.info?.id }
                        >
                            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

// If we write defaulit export below along with named export it will work
export default Body;

