 import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //create state variable in class based component .
        //this is big obj which holds all the variable 
        this.state={
            count:0,
            count2:0,
            userNameInfo:{
                name:'Dummy',
                location:"Nepal"
            }
        };
        console.log(this.props.name+"constructor")
    }
   async componentDidMount(){
        //we make api calls here
        const data=await fetch("https://api.github.com/users/heyimsakshi")
        const json=await data.json();
        console.log(json);
        this.setState({
            userNameInfo:json
        })
        console.log(this.props.name+"componentDid mount")
    }
    // this function is called after every subsequent render

    componentDidUpdate(prevProps,PrevState){
        if(this.state.count!==PrevState.count){

        }
    }
render(){
    //console.log(this.props.name);
    console.log(this.props.name+"Render")
    //debugger;
    return(
        <div>
            <button onClick={()=>{
                //this line createb inconsistency in the data
               // this.state.count=this.state.count+1 //never update like this
               this.setState({
                count:this.state.count+1
               }) ;
            }}>count increase</button>
            <h1>{this.state.count}</h1>
            Hi I am {this.state.userNameInfo.name}
        </div>
        )
}
}
export default UserClass;