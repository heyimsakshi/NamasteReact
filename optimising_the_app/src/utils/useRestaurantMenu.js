import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";
const useRestaurantMenu=(resId)=>{
    const [resInfo, setResInfo] = useState(null);

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

    return resInfo;
}

export default useRestaurantMenu;