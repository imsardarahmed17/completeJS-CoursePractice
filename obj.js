//objects

// let myInfo = {
//   firstname: "sardar",
//   lastName: "Ahmed",
//   birthYear: "1991",
//   friends: ["ali", "Asad", "salman"],
//   hasDriverLicence: false,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(myInfo.calcAge());
// console.log(myInfo.age);
// let result = `${myInfo.firstname} ${myInfo.lastName} has an age of ${myInfo.age}`;
// console.log(result);

// // console.log(myInfo["birthYear"]);

// if (myInfo.hasDriverLicence) {
//   console.log("u can drive");
// } else {
//   console.log("achieve driving licence first");
// }

//loops:

// for (let i = 1; i <= 10; i++) {
//   console.log(`samalik ${i}`);
// }

// let players = [
//   "rizwan",
//   "fakhar",
//   "baber",
//   255,
//   false,
//   "saad",
//   "asif",
//   "shadab",
// ];
// let types = []

// for (i = 0; i < players.length; i++) {
//   console.log(players[i], typeof players[i]);

//   // types[i]=typeof players[i]
//   types.push(typeof players[i])
// }
// console.log(types);

// let birthYears = [1991,2000,1995,2001,2003,2010]
// let ages=[]

// for(let i=0; i<birthYears.length; i++){
//   ages.push(2022 - birthYears[i])
// }
// // console.log(ages);

// //continue and break;

// let players = [
//     "rizwan",
//     "fakhar",
//     "baber",
//     255,
//     false,
//     "saad",
//     699,
//     "asif",
//     89,
//     "shadab",
//   ];
//   let types = []
//   console.log("-----ONLY Strings----");
//   for (i = 0; i < players.length; i++) {
//     if(typeof players[i] !== "string") continue
//     console.log(players[i], typeof players[i]);
//   }

//   console.log("---Break with Number---");

//   for (i = 0; i < players.length; i++) {
//     if(typeof players[i] === "number") break
//     console.log(players[i], typeof players[i]);
//   }

// let players = [
//   "rizwan",
//   "fakhar",
//   "baber",
//   255,
//   false,
//   "saad",
//   699,
//   "asif",
//   89,
//   "shadab",
//   "shaheen"
// ];

// for (i = players.length - 1; i>=0; i--){
//   console.log(i, players[i]);
// }

// //loop inside loop;

// for(let exercise=1; exercise<4; exercise++){
//   console.log(`exercise  ${exercise}`);

//   for(let rep= 1; rep<11; rep++){
//     console.log(`weight lifting repition ${rep} of exercise ${exercise}` );
//   }
// }

//while loop:

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let rep = 1;

// while (rep <= 10) {
//   console.log(rep);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)

while (dice !== 6) {
  console.log(`The rolled number is ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("loop is ended");
  }
}
