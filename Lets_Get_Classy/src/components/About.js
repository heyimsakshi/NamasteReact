import UserClass from "./UserClass"
import User from "./User";
import React from "react";

// class About extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("Parent constrctor")
//     }
//     componentDidMount(){
//         //console.log(" parent componentDid mount")
//         this.timer=setInterval(()=>{
//             console.log("namaste");
//         },1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer);
//         console.log("about unmonted")
//     }
//     render(){
//         console.log("parent render")
//         return (
//         <div className="about-us">
//                    This is About us
//                 {/* <User name={"Sakshi Agrawal"}/> */}
//                 <UserClass name={"first child"}/>
//                 <UserClass name={"second child"}/>
//            </div>
//         )
//     }
// }
const About=()=> {
    return (
        <div className="about-us">
            This is About us
        <User name={"Sakshi Agrawal"}/>
        {/* <UserClass name={"Sakshi Agrawal"}/> */}
        </div>
       
    )
}
export default About;