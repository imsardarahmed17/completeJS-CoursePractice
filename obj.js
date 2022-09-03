//array destructuring
// let numArray = [1,2,3,4,5,6,7,8,9]
// let alphabetArray = ["A","B","C","D","E","F","G","H"]

// let newArray = [...alphabetArray,...numArray]
// console.log(newArray);

// let [a,b,c,d, ...rest]= numArray
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(rest);

function sumAndMultiply(a,b) {
return [a*b, a+b, a/b]    
}
let [multiply, sum, division= "no division"] = sumAndMultiply(5,4)
console.log(multiply);
console.log(sum);
console.log(division);




//object destructuring

let personOne = {
  name: "sardar",
  age: 33,
  proffession: "web developer",
  country:"usa",
  hobbies: {
    first: "book reading",
    second: "playing cricket",
  },
  citiesVisited: ["islamabad", "Lahore", "mianwali", "rawalpindi"],
};
// let {name, age, hobbies:{first, second, third="sleeping"}} = personOne
// console.log(first);
// console.log(second);
// console.log(third);

// let personTwo = {
//     name: "zulfi",
//     age: 43,
//     proffession: "web developer",
//     hobbies: {
//       first: "book reading",
//       second: "playing tennis",
//       third : "gardening"
//     },
//     citiesVisited: ["islamabad", "Lahore", "mianwali", "rawalpindi"],
//   };
//   let personThree = {...personOne, ...personTwo}
//   console.log(personThree);

function user ({name, age, hobbies:{first,second, third="music"},citiesVisited} = personOne){
    console.log(name, second, third,citiesVisited);
}
// user()







