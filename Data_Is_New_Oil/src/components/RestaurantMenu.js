import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";
const RestaurantMenu = () => {
    const { resId } = useParams();
   let resInfo=useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);
   if (resInfo === null) {
    return <Shimmer />;
}
        let data;
        let catogories;
        resInfo.cards.forEach((res,index) => {
            if(res?.card?.card?.info){
              data =resInfo?.cards?.[index]?.card?.card?.info;
              
            }
            if(res?.groupedCard){
                catogories=res.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => 
                c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
           );
            }
        });

    const {name,costForTwoMessage, cuisines, areaName,avgRating, totalRatingsString }=data;

    
   
    console.log(catogories)
   
  
  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{ name }</h1>
        <h1 >{costForTwoMessage}</h1>
        <h1>{cuisines}</h1>
        <h1>{areaName} </h1>
        <h1>{avgRating}</h1>
        <h1>{totalRatingsString}</h1>
       
        {/* {catogories accordian} */}
       
        {
          
        catogories?.map((category,index)=>{
         //controlled component
           return <RestaurantCategory 
           key={category?.card?.card?.title}
            data={category?.card?.card}
           showItems={index==showIndex?true:false}
           setIndex={()=>setShowIndex(index)}
           />
        }
       )   
      
       }
      
        
       
    </div>
  )
}

export default RestaurantMenu;