import ItemList from "./ItemList";
import { useEffect, useState } from "react";
RestaurantCategory = ({data})=> {
    console.log(data)
    const [showItems,setShowItems]=useState(false);
    handleClick=()=>{
        setShowItems(!showItems);
    }
    return(
        <div>
            {/**Header */}
            <div className="w-6/12 mx-auto my-4 shadow-lg p-4 ">
               <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                    <span>⬇</span>
               </div>
                
                  {/**Accordion Body */}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            
             
             
        </div>
        
    )
 }


 export default RestaurantCategory;