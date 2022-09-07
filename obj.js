// // let friends =["Ali","Asad", "umar"]
// console.log(friends [friends.length - 1]);
// let studentsBirthYears=[1991, 2000, 1995]
// let calcAge =(birtYear)=>{
//   let age = 2022 - birtYear
//   console.log(age);
//   return age
// }
// const age1 = calcAge(studentsBirthYears[0])
// const age2 = calcAge(studentsBirthYears[1])
// const age3 = calcAge(studentsBirthYears[studentsBirthYears.length - 1])
// console.log(age1, age2, age3);
// let ages = [age1, age2, age3]
// console.log(ages);

let friends = ["Ali", "Asad", "umar"];
let poped = friends.pop();
friends.push("samalik");
console.log(poped);

friends.unshift("sam");
console.log(friends);
friends.shift();
console.log(friends);

let result = friends.includes("samalik");
console.log(friends.indexOf("samalik"));

if (friends.includes("saqib")) {
  console.log("u r present");
} else {
  console.log("u r not pesent");
}
