import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
const CartNew=()=>{
    const cartData=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(clearCart())
    }
    return (
        <div>
            <button className="cursor-pointer bg-black text-white" onClick={handleClick}>Clear Cart</button>
            <h1>Cart</h1>

            <ItemList items={cartData}/>
        </div>
        


      
    )
}
export default CartNew;