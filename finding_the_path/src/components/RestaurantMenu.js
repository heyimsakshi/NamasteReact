import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu=()=>{
    const {resId}=useParams()
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]) ;
    const fetchMenu=async ()=>{
        const apiRes=await fetch(MENU_API + resId);
        const json=await apiRes.json();
        setResInfo(json.data);
    }
    if(resInfo===null){
        return <Shimmer/>;
    }
    
    const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } = resInfo?.cards?.[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
           
            <ul>
            <h1>{ name }</h1>
            <p> { cuisines.join(',') } - { costForTwoMessage }</p>
            <h2> Menu </h2>
            <ul>
            { itemCards?.map((item) => 
                <li 
                    key={item.card?.info.id}
                >
                    { item.card?.info?.name } - { item.card?.info?.price ? item.card?.info?.price : item.card?.info?.defaultPrice }
                </li>
            ) }
            </ul>
            </ul>
        </div> 
    )
    
}
export default RestaurantMenu;