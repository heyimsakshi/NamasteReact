import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    //console.log(items);
    return (
        <div>
          {
            items.map((item)=> {
            return (
                <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div>
                    <div className="py-2"> 
                    <span className="font-bold ">{item.card.info.name}</span>
                    <span> -₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                    <p  className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="m-0 p-0 ">
                        <img src={CDN_URL+item.card.info.imageId} className="w-11 h-11 "/>
                        <button className="bg-black text-white font-semibold rounded-sm" >Add +</button>
                    </div>
                    
                </div>
            )})
          }  
        </div>
    )
}

export default ItemList;