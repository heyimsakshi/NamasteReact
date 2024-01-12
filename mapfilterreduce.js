// higher order functions


//forEach
//filter
//map
//sort
//reduce


const companies=[
    {name:"Google",category:"Product Based", start:1981, end:2004},
    {name:"Amazon",category:"Product Based", start:1982, end:2005},
    {name:"coforge",category:"Product Based", start:1983, end:2006},
    {name:"Mindtree",category:"service Based", start:1984, end:2007},
    {name:"patym",category:"service Based", start:1985, end:2008}
]



const ages=[33,12,20,16,54,5,44,13,15,25,24,28,19,23]




//level 0 standard loop

// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }


//level 1 forEach

// companies.forEach(function(company,a){ //the callback inside for Each is syncronous 
// console.log(company);
// console.log(a);
// })



//level 2 

//  companies.forEach((company,ind)=>{ //the callback inside for Each is syncronous 
// console.log(company);
// console.log(ind);
// })


// Filter

//level 0 
// const age=ages.filter((age)=>{
//     if(age>=20){
//         return true;
//     }
// })
// console.log(age);


// level 1

/*const finalAge=ages.filter((age)=>age>=20) // since only online code writeen 
// if it would have multiple lines then we would have inserted that piece of code into a block{}
console.log(finalAge);*/


// level 2


/*const Age=ages.filter(age=>age>=20) // removing age bracket also works 
console.log(Age);*/


/*// use filter to show only service based company

const companiesData=companies.filter(company=>company.category=="service Based")
console.log(companiesData)*/


/*//map function 

const dummy=companies.map((company,index)=>{
return `${company.name} ${company.category}`
})

console.log(dummy);*/



//sort 

/*//level0

const sorted=companies.sort((c1,c2)=>{
    if(c1.start<c2.start){
        return 1;
    }
    else return -1;
})

console.log(sorted);*/


//level1

/*const sorted2=companies.sort((c1,c2)=>c1.start< c2.start)

console.log(sorted);*/


/*const sorted3=ages.sort((c1,c2)=>c2-c1) ;
console.log(sorted3);*/


//reduce

// level0
// let total=0;
// for(let i=0;i<ages.length;i++){
//     total+=ages[i];
// }
// console.log(total);


// level 1

// reduce takes a callback function which takes two parameters total and age
// total which arry the sum and age will be the current iteration of age.
// reduce also takes initial value 
let age=ages.reduce((total,age)=>{   
    console.log(total,age);
return total+age;
},0)
 
console.log(age);


