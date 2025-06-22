// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//
let a = 'test'
const b = true
const c = 789
a = 'test2'

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};



var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//Toma la propiedad first name de person y guardala en firstname.
var {firstName:primerNombre,lastName:apellido,age:edad,eyeColor:colorOjos } = person

// Object properties
var a = 'test';
var b = true;
var c = 789;

/* Full Form
var okObj = {
  a: a,
  b: b,
  c: c
};
*/

var {a,b,c} = okObj

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

var message = `Hello ${firstName} have I met you befor? I think we met in ${city} last summer don't we?`

// default arguments
// default age to 10; implicit return 
let  isValidAge = (age=10) => age


// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');

// Full Function
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// Arrow functions
let whereAmI = (username,location) => { 
     if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }

}