import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const { resId } = useParams();
   let resInfo=useRestaurantMenu(resId);
   if (resInfo === null) {
    return <Shimmer />;
}
console.log(resInfo)
    const { name } =resInfo?.cards?.[0]?.card?.card?.info
console.log(name);
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
        <h1>{ name }</h1>
        
        <h2> Menu </h2>
        {/* <ul>
            { itemCards?.map((item) => 
                <li 
                    key={item.card?.info.id}
                >
                    { item.card?.info?.name } - { item.card?.info?.price ? item.card?.info?.price : item.card?.info?.defaultPrice }
                </li>
            ) }
        </ul> */}
    </div>
  )
}

export default RestaurantMenu;