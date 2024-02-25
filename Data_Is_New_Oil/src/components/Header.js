import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]=useState("login");
    const onlineStatus=useOnlineStatus();

    return(  
         <div className="flex justify-between bg-slate-200 sm:bg-pink-300">
             <div className="logo-container">
                <img 
                className="w-24"
                src={LOGO_URL}/>
             </div>

             <div className="flex items-center">
                <ul className="flex p-4 m-2">
                <li className="p-4">
                Online Status : { onlineStatus ? "✅" : "🔴" }
                    
                </li>
                    <li className="p-4">
                    <Link to="/"> Home </Link>
                    </li>
                    <li className="p-4">
                        <Link to="/about">  About Us</Link>
                       
                    </li>
                    <li className="p-4"> 
                        <Link to="/contact">Contact us</Link>
                        
                    </li>
                    <li className="p-4">
                        <Link to="/Grocery">Grocery</Link>
                        
                    </li>
                    <li className="p-4">
                        Cart
                    </li>
                    {/* want this login button to be dynamic which chnages to logout when inside login */}
                     <button className="login-btn" onClick={()=>{
                        btnName==="login"?setBtnName("logout"):setBtnName("login")
                     }}>{btnName}</button> 
                </ul>
             </div>
         </div>
    )
}
export default Header;