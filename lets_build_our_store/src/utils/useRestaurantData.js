import { useEffect, useState } from "react";
const useRestaurantData=()=>{
    const [restaurantList,setRestaurantList]=useState(null);
    useEffect(()=>{
    
        fetchData();
      },[]);
     
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456333351378966&lng=78.37263149036954&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
     
         //Optional chaining
       setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
       
    
    };
    return restaurantList;
}
export default useRestaurantData;