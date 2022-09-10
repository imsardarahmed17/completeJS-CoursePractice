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

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice)

// while (dice !== 6) {
//   console.log(`The rolled number is ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("loop is ended");
//   }
// }

//find temp amplitude from an array

// const myTemps = [12, 15, 24, 35, -5, -25, "error", 4, 0, 32];

// const calcTempAplitude = function (arr1, arr2) {
//   const temps = arr1.concat(arr2);
//   let maxTemp = temps[0];
//   let minTemp = temps[0];
//   for (i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > maxTemp) maxTemp = currTemp;
//     if (currTemp < minTemp) minTemp = currTemp;
//   }
//   console.log(temps);
//   console.log(maxTemp, minTemp);
//   return maxTemp - minTemp;
// };
// let result = calcTempAplitude([2, 5, 14], [12, 25, -6]);
// console.log(result);

//Array destructring:

// let array = [2, 5, 6, [15, 45]];
// const [a, b, c, [d, e, f = 1]] = array;
// console.log(a, b, c, d, e, f);

// let playerInfo = {
//   name: "fakhar",
//   age: 31,
//   hobbies: ["cricket", "reading novels", "shopping"],
// };
// const [x, y, z] = playerInfo.hobbies;
// const favHobby = playerInfo.hobbies[1];
// console.log(favHobby);
// // const fakharHobbies =playerInfo.hobbies[2]

// console.log([x, y, z]);

// const batsman = ["baber", "rizwan", "heider"];

// let [no1, no2, no3] = batsman;
// console.log(no1, no2);
// [no1, no2] = [no2, no1];
// console.log(no1, no2);

//object destructuring:

//problem here?

let playerInfo = {
  name: "Baber Azam",
  age: 28,
  teams: ["Pakistan", "Krachi kings", "Lahore Qalandars"],
  bestInnings: {
    vsAus: {
      year: 2011,
      score: 125,
      balls: 110,
    },
    vsIndia: {
      year: 2015,
      score: 145,
      balls: 140,
    },
    //Brother, this does'nt work, how to access data among nested objects in a bigger object?
    findStrikeRate: function () {
      this.srikeRate = (this.vsAus.score / this.vsAus.balls) * 100;
      return this.srikeRate;
    },
  },
};

let {
  bestInnings: {
    vsAus: { score, balls, findStrikeRate, strikeRate },
    vsIndia: scoreVsIndia,
  },
} = playerInfo;
console.log(score); //125
console.log(balls); //110
let result = findStrikeRate(score, balls);
console.log(result); //NaN
console.log(strikeRate); //unidentified

//simplified and tried, it works

vsAus= {
  year: 2011,
  score: 125,
  balls: 110,
  findStrikeRate: function () {
    this.srikeRate = (this.score / this.balls) * 100;
    return this.srikeRate;
  }
}
console.log(vsAus.findStrikeRate(vsAus.score, vsAus.balls));


// let playerInfo = {
//   bestInnings: {
//     vsAus: {
//       year: 2011,
//       score: 125,
//       balls: 110,
//     },
//   },
//   findStrikeRate:(score,balls)=> {
//       // this.srikeRate = (this.bestInnings.vsAus.score/ this.bestInnings.vsAus.balls) * 100;
//       // this.srikeRate = (this.vsAus.score/ this.vsAus.balls) * 100; //-->Not works 
//       this.srikeRate = (score/ balls) * 100; //---> works this way but strikeRate unIdentified
//       return this.srikeRate;
//     },
// };

// const {
//   bestInnings: {vsAus: { score, balls, strikeRate }},
// } = playerInfo;


// console.log(score); //125
// console.log(balls); //110

// console.log(playerInfo.findStrikeRate(score, balls));

// console.log(strikeRate); //unidentified