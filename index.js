// function addNumbers(a,b,c,...other){
//     console.log(arguments);
// return a+b+c;
// }

// console.log(addNumbers(2,3,4,5,6));


// var names=["puchaa","puchhu","puchida"];
// function getNames(a,b,c){
//     console.log(a,b,c);
// }

// getNames(...names);
// getNames(names[0],names[1],names[2]);


const datas=[
    {name:"Ajay",profession:"softwareEngineer"},
    {name:"Anuj",profession:"softwareEngineer"}
    ]
    
    function getDatas(){
    setTimeout(()=>{
    let output="";
    datas.forEach((data)=>{
    output+=`<li>${data.name}</li>`
    
    })
    document.body.innerHTML=output;
  
    },1000)
    }
    
    //callback
    // function createDatas(newdata,callback){
    // setTimeout(()=>{
    // datas.push(newdata,);
    // callback();
    // },2000)
    // }	
    

    //promise
    // function createDatas(newdata){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             datas.push(newdata);
    //            let error=false;
    //            if(!error){
    //             resolve();
    //            }
    //            else{
    //             reject("kuch sahi nahi hai ..")
    //            }
    //         },2000)
    //     })
       
        
    // }	
    // createDatas({name:"viellok", profession:"softwareEngineer"}).then(getDatas).catch((err)=>{console.log(err)})

    //Async &Await
 
    
    // async function start(){
    //     await createDatas({name:"viellok", profession:"softwareEngineer"});
    //     getDatas();
    // }
    // start();
    


    // call Apply and bind 

let userDetails={
    name:"Ajay",
    profession:"Software Engineer",
    printDetails:function(){
        console.log(this.name);
    }
}

//userDetails.printDetails();// above 
//printdetails this points to userDetails 
//but I want this point to userDetils2 .
//for this we use call and apply.

let userDetails2={
    name:"Anuj",
    profession:"Software Engineer",
}

//userDetails.printDetails.call(userDetails2);
 
/*printDetailsOutside=function(city,country){
    console.log(this.name+" "+city);
}*/

//printDetailsOutside.call(userDetails,"delhi","India");
//printDetailsOutside.call(userDetails2,"Birgunj","Nepal")
//printDetailsOutside.apply(userDetails2,["Birgunj","Nepal"])
// call and apply are same but the only diiferrence is the extra arugments passing style.
// in apply the extra argument is in the form of array and in call the extra argumnet are paased as argumnets


/**let newfun=printDetailsOutside.bind(userDetails2,"Birgunj","Nepal") // basically bind creates the 
//copy of the function and to get it we eed to invoke it
newfun();*/








//prototypes in javascript

//obect prototype inheritance in javascript
// const obj={
//     name:"Anuj",
//     getName:function(){
//         return this.name;
//     },
//     getRoll:function(){
//         return this.roll;
//     }
// }

// const obj1={
//     roll:1,
//     name:"vivek",
//     __proto__:obj
// }
//console.log(obj1.getRoll());
// const obj3={
//     roll:4,
//     __proto__:obj1
// }
// console.log(obj3)

// createing prototype for inbuilt aaray and object
// const arr=["hello"];
// console.log(arr);

// Array.prototype.meaw=function(){

//     return this;
// }

// const cities=["delhi"];

// console.log(cities);


// Object.prototype.hey=function(){
//     return this;
// }

// const obj2={};
// console.log(obj2.hey());



// Array.prototype.convertIntoObject=function(){
//     let newobj={};
//     this.forEach(ele=>{
//         newobj[ele]=ele;
//     })
//     return newobj;
// }
// console.log(cities.convertIntoObject());


// //prototype incase of constructor
// function MyPrototype(name,roll){
//     this.name=name;
//     this.roll=roll;
// }
// MyPrototype.prototype=obj;
// const myproto=new MyPrototype("Priyanka","1");

// console.log(myproto.getRoll());





// currying in javascript


// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// data1=add(6);
// data2=data1(10);
// console.log(data1,data2)

// let res=add(4)(5); // this is currying in javascript
// console.log(res);

// userObj={
//     name:"sakshi",
//     age:28
// }

// function userInfo(obj){  
//     return function(userInfo){
//         return obj[userInfo];
//     }
// }

// console.log(userInfo(userObj)('age'));




// infinite currying in javascript

// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(4)(5)(9)(10)(17)())  //this is infinite currying we can keep as amny we want



// event bubbling

// event bubbling propagates from child to parent.
// Here when the button is clicked it is listned to the last parent
//that's why button is printed first and div printed second
// let div=document.querySelector("div")
// let button=document.querySelector("button")
// div.addEventListener("click",()=>{
//     console.log("div");
// })

// button.addEventListener("click",()=>{
//     console.log("button");
// })


// event capturing 
//parent to child propagation 
// let div=document.querySelector("div")
// let button=document.querySelector("button")
// div.addEventListener("click",()=>{
//     console.log("div");
// },true)

// button.addEventListener("click",()=>{
//     console.log("button");
// },true)

// since the above code has propagation from parent to child 
//so div printed first

// stop propagation


//suppose we dont want div to listen the event so we use this.

// let div=document.querySelector("div")
// let button=document.querySelector("button")
// div.addEventListener("click",()=>{
//     console.log("div");
// })

// button.addEventListener("click",(event)=>{
//     event.stopPropagation()
//     console.log("button");
// })

//stop immidiate propagation


// let button=document.querySelector("button")

// button.addEventListener("click",(event)=>{
   
//     console.log("button");
// })

// button.addEventListener("click",(event)=>{
//     event.stopImmediatePropagation()
//     console.log("button1");
// })
// button.addEventListener("click",(event)=>{
   
//     console.log("button3");
// })

//here on the same tage we have used listner thrice
//if we want to stop the propagation immmidiately after particular event we
//can use stopimmidiatepropagation
//button3 wont be printed in cosole coz after button1 we have stopped the propagation




//preventDefault
//prevent doing  its natural behaviour
//suppose the task of anchor tag is to navigate to other page  but if we use prevent Defau;t
//then we dont move to next page.


// let a=document.querySelector("a")

// a.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log("a");
// })




