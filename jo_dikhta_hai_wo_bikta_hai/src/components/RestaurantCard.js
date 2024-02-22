//Here CDN URL is imported with curly braces 
import { CDN_URL } from "../utils/constants";
//for inline styling
const styleCard={
    backgroundColor:"#f0f0f0"
  }
  //here style takes js object
  const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, deliveryTime, avgRating, costForTwo } = resData?.info; //destructuring a json object
    return (
        <div className=" p-4 m-4 w-[200px] shadow-lg" >
         
                <img
                    alt={name}
                    src={CDN_URL + cloudinaryImageId }
                />
        
            
                <h3>{ name }</h3>
             
                    
                    
                <span>{ avgRating } . { deliveryTime } mins</span>
               
                
                <div className="subtext">{ cuisines.join(',') }</div>
                <div className="subtext">₹{costForTwo / 100} FOR TWO</div>
           
        </div>
    )
};

// const RestaurantCard=(props)=>{
//  console.log(props)
//     return(
   
//         <div className="res-card" style={styleCard}>
//             <img 
//             className="res-logo"
//             alt="res-logo"
//             src={
//                 "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//                 props.resData.data.cloudinaryImageId
//               }/>
//             <h3>{props.resData.data.name}</h3>
//             <h4>{props.resData.data.cuisines.join(',')}</h4>
//             <h4>{props.resData.data.area}</h4>
//       <span>
//         <h4><i class="fa-solid fa-star"></i>{props.resData.data.avgRating}</h4>
//         <h4>{props.resData.data.lastMileTravelString}</h4>
//         <h4>{props.resData.data.costForTwoString}</h4>
//       </span>
//         </div>
//     )
// }

export default RestaurantCard;