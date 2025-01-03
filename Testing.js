/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */

let myString = 'hello,this,is,a,difficult,to,read,sentence';

myString = myString.replace(/,/g, " ");
// console.log(myString)

// console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');

/**
 * Report whether or not a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */

let i = 0

while (i < 21) {
  if (i % 2 === 0) {
    // console.log(`The number ${i} is even!`)
  } else {
    // console.log(`The number ${i} is odd!`);
  }
  i++;
}

/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
**/
// const title1 = {}
// const numberofserves = {}


const listForRecipee = {
  title: "Omelette",
  serves: 2,
  ingredients: {
    eggs: 4,
    stripsOfBacon: 2,
    saltPepper: 1
  }
};

listForRecipee.ingredients.water = "1 ml"

delete listForRecipee.ingredients.eggs

/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */



const book = {
  title: "Habitos Atomicos",
  author: "James Clear",
  alreadyRead: false
}

const book2 = {
  title: "El poder del Ahora",
  author: "Eckhart",
  alreadyRead: true
}

const book3 = {
  title: "El monje que vendio su Ferrari",
  author: "Robin Sharma",
  alreadyRead: false
}

const list = [
  book,
  book2,
  book3
]
console.log(list.length)

list.map((book) => {
  console.log(book.title + ' by ' + book.author)
  if (book.alreadyRead) {
    return console.log('You already read ' + book.title);
  }
  return console.log('You still need to read ' + book.title)
})

// for (let i = 0; i < list.length ; i++) {


//     console.log(list[i].title + ' by ' + list[i].author)

//     if (list[i].alreadyRead) {
//         console.log('You already read ' + list[i].title);
//     }
//     console.log('You still need to read ' + list[i].title)

// }

/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 * 
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

drinkTray = [];
const drinkTypes = ['Cola', 'Lemonade', 'Water'];
const drinkCount = { "Cola": 0, "Lemonade": 0, "Water": 0 }

// for (let i = 0; i < 5; i++ ){
//     for (let drink of drix nk) {
//         if (drinkCount[drink] <2){
//             drinkTray.push(drink);
//             drinkCount[drink]++;
//             break;
//         }
//     }
// }

console.log("Hey guys, I brought a:", drinkTray)

/** Week 2 - Taffic Light */

// Week 1

"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight1 = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const {state} = trafficLight1;
  // console.log("The traffic light is on", currentState);
switch (state) {
  case "green":
    trafficLight1.state = "orange";
    break;
  
  case "orange":
    trafficLight1.state = "red";
    break;
  
  case "red":
    trafficLight1.state = "green";
    rotations += 1;
    break;

  default:
    break;
}

}


// const trafficLight = {
//   possibleStates: ["green", "orange", "red"],
//   stateIndex: 0,
// // };

// let cycle = 0;
// while (cycle < 2) {
//   const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
//   // console.log("The traffic light is on", currentState);
//   if (currentState == "green"){
//   trafficLight.stateIndex += 1;
//   } else if (currentState == "orange"){
//   trafficLight.stateIndex += 1;
//   } else if (currentState == "red"){
//   trafficLight.stateIndex = 0;
//     cycle += 1;
//   }
// }


console.log("--------------------------------")
console.log("--------------------------------")

// "use strict";
/**
 * The `trafficLight` object is now no longer a global variable. Instead,
 * it is defined in function `main()` and passed as a parameter to other
 * functions, as and when needed.
 */

function getCurrentState(trafficLight) {
  // TODO
  // Should return the current state (i.e. colour) of the `trafficLight`
  // object passed as a parameter.
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  // console.log(currentState);
  return currentState;
}

function getNextStateIndex(trafficLight) {
  // TODO
  // Return the index of the next state of the `trafficLight` such that:
  // - if the color is green, it will turn to orange
  // - if the color is orange, it will turn to red
  // - if the color is red, it will turn to green
  const stateIndex = trafficLight.stateIndex;
  const states = trafficLight.possibleStates;

  let nextIndex = stateIndex + 1;

  if (nextIndex >= states.length) {
    nextIndex = 0
  }
  return nextIndex
}

// This function loops for the number of seconds specified by the `secs`
// parameter and then returns.
// IMPORTANT: This is not the recommended way to implement 'waiting' in
// JavaScript. You will learn better ways of doing this when you learn about
// asynchronous code.
function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // nothing do to here
  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1); // Wait a second before going to the next state
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
console.log("--------------------------------")
console.log("--------------------------------")


// Week 2  - Experiments

"use strict";
let values1 = [];
for (let u = 1; u <= 6; u++) {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  values1.push(randomNumber);
}
console.log(values1)

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  // NEEDS TO BE FIXE
  function getRandomIntInclusive(min = 1, max = 6) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  for (var i = 1; i <= sampleSize; i++) {
    let valueCount = (getRandomIntInclusive())
    valueCounts.push(valueCount)
    console.log(valueCounts)
  }
  // TODO
  // Write a for loop that iterates `sampleSize` times (sampleSize is a number).
  // In each loop iteration:
  //
  // 1. Generate a random integer between 1 and 6 (as if throwing a six-sided die).
  // 2. Add `1` to the element of the `valueCount` that corresponds to the random
  //    value from the previous step. Use the first element of `valueCounts`
  //    for keeping a count how many times the value 1 is thrown, the second
  //    element for value 2, etc.



  const results = [];

  // TODO
  // Write a for..of loop for the `valueCounts` array created in the previous
  // loop. In each loop iteration:
  // 1. For each possible value of the die (1-6), compute the percentage of how
  //    many times that value was thrown. Remember that the first value of
  //    `valueCounts` represent the die value of 1, etc.
  // 2. Convert the computed percentage to a number string with a precision of
  //    two decimals, e.g. '14.60'.
  // 3. Then push that string onto the `results` array.




  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  // TODO
  // Write a for..of loop that calls the `runExperiment()` function for each
  // value of the `sampleSizes` array.
  // Log the results of each experiment as well as the experiment size to the
  // console.
  // The expected output could look like this:
  //
  // [ '26.00', '17.00', '10.00', '19.00', '16.00', '12.00' ] 100
  // [ '14.60', '17.10', '19.30', '15.50', '16.70', '16.80' ] 1000
  // [ '16.71', '16.68', '16.69', '16.66', '16.67', '16.59' ] 1000000
}

const sampleSizes = [100, 1000, 1000000];
main();
runExperiment(sampleSizes)

// Week 3

/**
 * In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list1 = [1721, 979, 366, 299, 675, 1456];
let result;
let sum = 0

const total = 2020
// Write your code here
for (let i = 0; i < list1.length; i++) {
  for (let j = 0; j < list1.length; j++) {
    for (let x = 0; x < list1.length; x++) {
      const suma = list1[i] + list1[j] + list1[x]
      // console.log(i, j , suma)
      if (suma === total) {
        result = list1[i] * list1[j] * list1[x]
        //  console.log(result)
      }
    }
  }
}

// list1.map((firstValue)=>{
//   list1.map((secondValue)=>{
//     const suma = firstValue + secondValue
//     if(suma=== total){
//       result = i * j 
//     }
//   }) 
// })

// TEST CODE, do not change
// console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);

console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);


/**
 * Credit to https://adventofcode.com/ for this exercise
 * 
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 * 
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 * 
 * We expect the output:
 * 
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

const passwordList = [
  { times: '1-3', letter: 'a', password: 'abcde' },
  { times: '1-4', letter: 'b', password: 'cdefg' },
  { times: '2-9', letter: 'c', password: 'ccccccccc' }
];

// let experiment = passwordList.map(letter =>)
// console.log(experiment)

const parseTimesToNumber = (time = "") => {

  const min = Number(time.split("-")[0])
  const max = Number(time.split("-")[1])
  return {
    min,
    max
  }
}

for (i = 0; i < passwordList.length; i++) {

  const { min, max } = parseTimesToNumber(passwordList[i].times)
  const letter = passwordList[i].letter
  const password = passwordList[i].password
  // console.log(i)
  let count = 0
  const listnumber = password.split("")

  listnumber.map((char) => {
    if (char === letter) {
      count += 1
    }
  })

  if (count <= max && count >= min) {
    console.log(`Valid, ${letter} is in ${password} ${count} time`)
  } else {
    console.log(`Invalid, ${letter} is not between ${min} or ${max} times in ${password}`)
  }
}

/**
 * It is time to write some bigger code! You have a bankAccount that is modeled as given.
 *
 * Finish the two functions that will donate money (donateMoney) and pay rent (payRent).
 * If you do not have enough funds, call the onFail function given and don't change the bankAccount.
 * If you do have the funds, update the bankAccount accordingly.
 *
 * TIP: have a look at the test code to get more information on what needs to happen
 * TIP: a lot of the things the functions do are the same, you may want to create one or more other functions to not duplicate code
 */

const bankAccount = {
  // The currentBalance is how much money you have in your bankAccount.
  currentBalance: 250,
  // The transactions are a list of changes so that you can keep track.
  transactions: [
    /**
     * The prevAmount is what your balance was before the transaction,
     * the newAmount is what your balance was after the transaction
     * and the reason is what the transaction was about
     */
    {
      prevAmount: 350,
      newAmount: 250,
      reason: "Donation",
    },
  ],
};

const addTransaction = (prevAmount, newAmount, reason) => {
  const newTransaction = { prevAmount, newAmount, reason };
  bankAccount.transactions.push(newTransaction);
};



const donateMoney = (amount, onSuccess, onFail) => {
  // TODO complete this function
  // let lastBalance = bankAccount.transactions[0].prevAmount

  const condition = amount > 0 && amount <= bankAccount.currentBalance

  if (!condition) {
    return onFail()
  }
  let prevAmount = amount;
  let newAmount = bankAccount.currentBalance - amount;
  bankAccount.currentBalance -= amount

  addTransaction(prevAmount, newAmount, "Donation")

  return onSuccess()
}

donateMoney()
// console.log(lastBalance)

const payRent = (amount, onSuccess, onFail) => {
  // TODO complete this function
  if (amount > 0 && amount <= bankAccount.currentBalance) {
    let prevAmount = amount;
    let newAmount = bankAccount.currentBalance - amount;
    bankAccount.currentBalance -= amount

    addTransaction(prevAmount, newAmount, "Rent")

    // console.log(bankAccount.transactions)
    return onSuccess()
  } else {
    return onFail()
  }
}

/**
 * TEST CODE. DO NOT EDIT
 */

const onSuccessEnglish = () => {
  console.log("Payment successful! Thank you!");
};
const onFailEnglish = () => {
  console.log("You do not have enough money to make this payment.");
};

const onSuccessDutch = () => {
  console.log("Betaling geslaagd! Dank u!");
};
const onFailDutch = () => {
  console.log("U heeft niet voldoende saldo om deze betaling te doen.");
};

donateMoney(100, onSuccessEnglish, onFailEnglish);

console.log(bankAccount);

payRent(100, onSuccessEnglish, onFailEnglish);
console.log(bankAccount);

donateMoney(100, onSuccessDutch, onFailDutch);
console.log(bankAccount);

/**
* The console should print out the following:
Payment successful! Thank you!
{
currentBalance: 150,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' }
]
}
Payment successful! Thank you!
{
currentBalance: 50,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' },
  { prevAmount: 150, newAmount: 50, reason: 'Rent' }
]
}
U heeft niet voldoende saldo om deze betaling te doen.
{
currentBalance: 50,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' },
  { prevAmount: 150, newAmount: 50, reason: 'Rent' }
]
}
* 
*/
