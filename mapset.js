//set
//It only contains unique values
//uses object constructor
/*let myarray=[1,2,3,4,2]
 let obj=new Set(myarray);
 obj.add(5);
 //console.log(obj);

 let obj2={name:"Ajay"};

 obj.add(obj2);

   console.log(obj);

   console.log(obj.has(2));*/


   //Map-> key->values

/*let mymap=new Map([["a1","Ajay"],["a2","Vikas"]]);
mymap.set("a2","helo")
console.log(mymap.get("a2"));

// iteration of map
//level 1
for(let [key,value] of mymap){
    console.log(`keys ${key}`, `value ${value}`)
}

//level2 

mymap.forEach((key,value)=>{
console.log(key,value)
})*/


//Weakset

/*//only store objects
//can't be iterated
let ws=new WeakSet();
var obj1={"name":"Tiger"};
var obj2={};
ws.add(obj1);
ws.add(obj2);
console.log(ws);*/





//weakMap
let wm=new WeakMap();

var obj3={name:"Ajaay"};
var obj4={};

wm.set(obj3,"private");
wm.set(obj4,"Private Data")

console.log(wm);