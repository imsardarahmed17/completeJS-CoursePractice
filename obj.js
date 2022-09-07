//objects

let myInfo = {
  firstname: "sardar",
  lastName: "Ahmed",
  birthYear: "1991",
  friends: ["ali", "Asad", "salman"],
  hasDriverLicence: false,
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(myInfo.calcAge());
console.log(myInfo.age);
let result = `${myInfo.firstname} ${myInfo.lastName} has an age of ${myInfo.age}`;
console.log(result);

// console.log(myInfo["birthYear"]);

if (myInfo.hasDriverLicence) {
  console.log("u can drive");
} else {
  console.log("achieve driving licence first");
}
