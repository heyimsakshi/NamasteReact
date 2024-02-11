import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
console.log(json);
        setResInfo(json.data)
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name } = resInfo?.cards?.[2]?.card?.card?.info;
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