// console.log('hello world')
// console.log('precious')

// //variables
// name = 'abdul'
// console.log(name)

// sentence = "irfief jieviudh v89h uvh9vh89d u9feoruhviev uivfhi vyuyufkdb"
// console.log(sentence)

// //operators
// food = 20 
// tip = 0.2
// tipAmount = food * tip
// console.log(tipAmount)

// //prompt
// //fruit = prompt('what is your favourite fruit?')
// //console.log(fruit)

// //user input
// //food = prompt('How much was your food?')
// food = Number(prompt('How much was your food?'))
// //tip = prompt('How many percent would you tip?')
// tip = Number(prompt('How many percent would you tip?'))
// tipPercentage = tip/100
// tipAmount = food * tipPercentage
// console.log(tipAmount)
// console.log('tip amount:', tipAmount)


// //calculate total amount paid
// totalAmount = food + tipAmount
// console.log(totalAmount)
// console.log('total amount:', totalAmount)
// //alert(totalAmount)


// //Data Types (string, numbers, arrays, objects, boolean)

// /* Math Operations
// multiply *
// divide /
// exponents **
// Modulo/Remainder % 5%2 = 1
// add +
// subtract -
// */

// /* Maths Methods
// floor - rounds down (Math.floor)
// ceil - rounds up (Math.ceil)
// random - gives a random number between 0 and 1 (Math.random()*3)
// */

// /* Types of Variables
// VAR - not recommended (outdated)
// LET - value can be changed
// CONST - value can not be changed

// */

// /* conditional operators
// ==, === (checks values and data type eg x ='8')
// >,<, <=, >=, !=, !==
// */ 

// //Baby weather App
// let weather = prompt('How is the weather?')

// if (weather == 'rainy'){
//     console.log('Grab your umbrella')}
//     else if (weather == 'normal'){
//         console.log('just go')
//     }
//     else{
//         console.log('wear your sunglasses')
//     }

// //classwork or assignment: result grading system app

//Functions
function saySomething(){
    console.log('A song')
    console.log('Melody')
    console.log('A poem')
}

saySomething()

//Dynamic Functions with arguments
function say(what){
    console.log(what)
}

say('heyyy')

// Dynamic Functions with user input
function sayMyName(name){
    name = prompt('What is your name?')
    console.log('hi', name, 'your name is', name)
    console.log(`hi ${name} your name is ${name}`) //template literals (``)
    console.log('hi '+ name, 'your name is '+ name)
}

//sayMyName()

//Dynamic Functions with multiple arguements
function sum(a, b){
    return (a + b)
}
d = sum(2,4)
console.log(d)
// Hint: Return statement makes a function reuseable
// Type Casting

//Class work: write a js code that gets the base and height of a triangle
// and outputs its area

function area(r){
    r = prompt('what is the radius of the circle')
    result = Math.PI * r ** 2
    console.log (result)
    return (result)
}
area()