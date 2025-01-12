import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
const Header=()=>{
    const [btnName,setBtnName]=useState("login");
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
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact us
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