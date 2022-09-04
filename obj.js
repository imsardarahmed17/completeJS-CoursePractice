let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;

const findBMI = (mass, height) => {
   let BMI = mass / (height * height);
   return BMI
};

let resultOne = findBMI(marksMass, marksHeight)
console.log(resultOne);
let resultTwo = findBMI(johnsMass, johnsHeight)
console.log(resultTwo);

let markHigherBMI = resultOne > resultTwo
console.log(markHigherBMI);
if (resultOne > resultTwo) {
  console.log(`Mark's BMI ${resultOne} is higher then John's BMI ${resultTwo}`);
} else {
  console.log(`John's BMI ${resultTwo} is higher then Mark's BMI ${resultOne}`);
}