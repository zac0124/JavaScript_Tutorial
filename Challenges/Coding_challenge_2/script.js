const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

// assign mass and height

const BMI1 = massMark / heightMark ** 2;
const BMI2 = massJohn / heightJohn ** 2;
const markHigherBMI = BMI1 > BMI2;

if (markHigherBMI) {
    console.log(`Mark's BMI (${BMI1}) is higher than John's (${BMI2})`)
}
else {
    console.log(`John's BMI (${BMI2}) is higher than Mark's (${BMI1})!`)
}



