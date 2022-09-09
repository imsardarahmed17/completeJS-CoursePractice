// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

//Solution:

// const calcTip = (bill) => {
//   return (tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill);
// };

// let bills = [125, 555, 44];
// let tip1 = calcTip(bills[0]);
// let tip2 = calcTip(bills[1]);
// let tip3 = calcTip(bills[bills.length - 1]);

// let tips = [tip1, tip2, tip3];
// // console.log(tips);
// let total1 = bills[0] + tips[0];
// let total2 = bills[1] + tips[1];
// let total3 = bills[2] + tips[2];

// let totalBills = [total1, total2, total3];
// console.log(bills, tips, totalBills);

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

//Solution:

const markInfo = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
markInfo.calcBMI();

const johnInfo = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
johnInfo.calcBMI();

if (markInfo.BMI > johnInfo.BMI) {
  console.log(
    `Mark's BMI (${markInfo.BMI} )is higher then John's (${johnInfo.BMI})`
  );
} else if (johnInfo.BMI > markInfo.BMI) {
  console.log(
    `John's BMI (${johnInfo.BMI}) is higher then Mark's (${markInfo.BMI})`
  );
}

//practice:

let player = {
  name: "baber",
  score: 100,
  balls: 90,
  findStrikeRate: function () {
    this.srikeRate = (this.score / this.balls) * 100;
    return this.srikeRate;
  },
};
player.findStrikeRate();
console.log(player.srikeRate);
