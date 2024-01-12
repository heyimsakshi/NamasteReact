// debounce and throthlling is useed to stop the unwanted 
//function in javascript
// we dont want that function to be called repeatedly 
//coz it affects the performance of the aplication

//In case of search bar whenever we type anything 
//we dont wnt function to be called coz it affects the 
//performance 


let counter=0;

function getData(){
   console.log("fetching data.." +  counter++) ;

}

// in above case whenever we are typi g something in the serach bar then 
//the function is getting triggered
//this is only the sole function heere 
//if we do the same thing in big applications then it may degragde 
// the performance of the apploication in the long transactions


const BetterFunction=myDebounce(getData,1000)
  
function myDebounce(call,d){
    let timer; // will be storing timer
    return function(...args){
        if(timer) clearTimeout(timer);
       timer= setTimeout(() => {
            console.log("hi");
         call();     
        }, d);
    }
}

