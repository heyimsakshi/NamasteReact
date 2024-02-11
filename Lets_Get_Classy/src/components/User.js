import { useEffect } from "react";

const User=()=>{
    useEffect(() => {
        // API call
        const timer = setInterval(() => {
            console.log("useEffect OP")
        }, 1000);

        // return is called while unmounting
        return () => {
            clearInterval(timer);
            console.log("UseEffect returned React unmounting")
        };
    });
    return(
    <div>
        Hi I am sakshi
    </div>
    )
}
export default User;
