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
console.log(list.length, "ñenm")

list.map((book)=>{
    console.log(book.title + ' by ' + book.author)
    if (book.alreadyRead) {
     return  console.log('You already read ' + book.title);
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
const drinkCount = { "Cola":0, "Lemonade":0, "Water":0}

for (let i = 0; i < 5; i++ ){
    for (let drink of drink) {
        if (drinkCount[drink] <2){
            drinkTray.push(drink);
            drinkCount[drink]++;
            break;
        }
    }
}

console.log("Hey guys, I brought a:" ,drinkTray)