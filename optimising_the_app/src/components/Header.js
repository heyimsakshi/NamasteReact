import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]=useState("login");
    const onlineStatus=useOnlineStatus();

    return(  
         <div className="header">
             <div className="logo-container">
                <img 
                className="logo"
                src={LOGO_URL}/>
             </div>

             <div className="nav-items">
                <ul>
                    <li>
                    <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about">  About Us</Link>
                       
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                        
                    </li>
                    <li>
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