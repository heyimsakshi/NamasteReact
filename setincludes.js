// 1. Check if user with such name exist
// 2. Adding element to the array
// 3. Remove duplicate element in the array
// 4. concatening the array
 

// learnings: set object, Includes(), some()
//reduce(),find(),findIndex(),concat()

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



//1.check if user name exists

/*//level0
// const isNameExist=(name,users)=>{
//     let exist=false;
//     for(let i=0;i<users.length;i++){
//         if(users[i].name==name){
//             exist=true;
//         }
//     }
//     return exist; 
// }
// console.log(isNameExist("Ajy",users))


//level1
// const isNameExist=(name,users)=>{
//     const user=users.find((user)=>user.name==name)
//     return Boolean(user);
// }
// console.log(isNameExist("Ajy",users))

//level2
// const isNameExist=(name,users)=>{
//         const ind=users.findIndex((user)=>user.name==name)
//         return ind>=0;
//     }
// console.log(isNameExist("Ajay",users))


//level3

// const isNameExist=(name,users)=>{
//         const user=users.some((user)=>user.name==name)
//         return user
//     }
// console.log(isNameExist("Ajy",users))
*/



//2. Adding elements to the array 
 

/*//original array modified in this case 
  const arr=[1,2];
  const append=(arr,ele)=>{
    arr.push(ele);
    return arr;
  }

  const newarray=append(arr,3);
console.log(newarray);
console.log(arr);*/


/*//prevent original array modification

const arr=[1,2];
  const append=(arr,ele)=>{
    return [...arr,ele];
  }

  const newarray=append(arr,3);
console.log(newarray);
console.log(arr)*/



//3. Remove Duplicate elements in the array


const arr=[1,2,3,3,4,4,5];


/*//level 1
function uniqueArray(arr){
   return new Set(arr)

}
const uniquearray=uniqueArray(arr);

console.log(uniquearray);*/


//level 2
 


/*const uniqueArray=(arr)=>{
    return arr.reduce((acc,ele)=>{
        return acc.includes(ele)?acc:[...acc,ele]
    },[])
}
console.log(uniqueArray(arr));*/



// concat the two array


/*//level 1
const mergeArray=(arr1,arr2)=>{ 
return [...arr1,...arr2]
}
const arr1=[1];
const arr2=[2,3];

const result=mergeArray(arr1,arr2);
console.log(result,arr1,arr2);*/



///level 2


const mergeArray=(arr1,arr2)=>{ 
    return arr1.concat(arr2);
    }
    const arr1=[1];
    const arr2=[2,3];
    
    const result=mergeArray(arr1,arr2);
    console.log(result,arr1,arr2)