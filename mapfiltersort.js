//usecases
// 1.write a code to get an array of names from given array of users
// 2.Get back only active users
// 3.Sort users by age descending

const users=[
    {
        id:1 ,
        name:"Ajay",
        isActive:true,
        age:20
    },
    {
        id:1 ,
        name:"Akash",
        isActive:false,
        age:18
    },
    {
        id:1 ,
        name:"Fraz",
        isActive:true,
        age:17
    },
    {
        id:1 ,
        name:"Nzam",
        isActive:true,
        age:15
    }
]

//solution 1.level 0


 /*const names=[];
//  for(i=0;i<users.length;i++){
// names.push(users[i].name);
//  }
//  console.log(names);


 //solution 2 level 2
 users.forEach((users)=>{
    if(users.isActive){
names.push(users.name)
    }
 })
 console.log(names);*/




 /*// optimised solution for question 1 and 2 

 //The map() method return a new array where as forEach doesnot retiurn a new array
 //the forEach method is similar to for loop but it doesnot have a return value
 //The map() method is similar to forEach() method but it returns a new array
  


 const name1=users.filter((user)=>user.isActive).map((user)=>user.name);
 console.log(name1);*/





 // sort
// sort() function sorts according to UTF-16 rule  so small number can come first
// to fix this we can paas comparator function

// const sortedData= users.sort((user1,user2)=>user1.age<user2.age?1:-1);
// console.log(sortedData);


/*const name1=users.filter((user)=>user.isActive)
.sort((user1,user2)=>user1.age<user2.age?-1:1)
.map((user)=>user.name);
console.log(name1);*/



