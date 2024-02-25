import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const { resId } = useParams();
   let resInfo=useRestaurantMenu(resId);
   if (resInfo === null) {
    return <Shimmer />;
}
        let data;

        resInfo.cards.forEach((res,index) => {
            if(res?.card?.card?.info){
              data =resInfo?.cards?.[index]?.card?.card?.info;
              return;
            }
        });
    const {name}=data;


  return (
    <div className="menu">
        <h1>{ name }</h1>
    </div>
  )
}

export default RestaurantMenu;