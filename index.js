// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 1.- Add element to an array
var arr = ['b', 'c', 'd'];

arr = [...arr, 'end'];
//arr.push('end');
//arr.unshift('start');

console.log(arr);

// 2.- Add private variable
function secretVariable() {
  var secret = 'private inside variable';

  return function () {
    return secret;
  };
}

var getPrivate = secretVariable();

//console.log(secretVariable()); //does not work
console.log(getPrivate()); //works fine

// 3.- What is the output?
var num = 4;
function outer() {
  var num = 2;

  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }

  inner();
}

outer(); //output will be 3.

// 4.- What is the output?
console.log(typeof typeof 1); //typeof("number"), so output is "string"

// 5.- What is the output?
var hero = {
  _student: 'John Doe',
  getSecretIdentity: function () {
    return this._student;
  },
};

//var stolenIdentity = hero.getSecretIdentity;

//console.log(hero.getSecretIdentity()); //John Doe
//console.log(stolenIdentity()); //Undefined, because "this" has different context

// var stolenIdentity = hero.getSecretIdentity.bind(hero);

// console.log(hero.getSecretIdentity()); //John Doe
// console.log(stolenIdentity()); //John Doe

//6.- CLOSURE

const createPrinter = function () {
  let myNumber = 42;

  return function () {
    console.log(`My favorite number is ${myNumber}`);
  };
};

const printer = createPrinter();
printer(); //Still accesing the "muNumber" value even though is a callback function

//function that returns a person object (instead of creating a class)
const Person = ({ name, age, job }) => {
  //Using object destructuring, instead of passing params
  var _name = name; //private field
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (newJob) => (_job = newJob),
  };
};

const me = Person({ name: 'Shaun', age: 25, job: 'lawyer' });
console.log(me.getName()); //available only through getName() property (getter)
console.log(me._name); //undefined because it is private

console.log(me.getJob());
me.setJob('senior developer');
console.log(me.getJob());

//7.- SUM ALL ELEMENTS INSIDE AN ARRAY THAT CONTAINS NESTED ARRAYS
function SumAllNumbers(arr) {
  return arr.flat(Infinity).reduce((a, b) => a + b, 0);
}

function SumAllNumbers2(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      sum += arr[i];
    } else if (arr[i] instanceof Array) {
      //} else if(Array.isArray(arr[i])){
      sum += SumAllNumbers2(arr[i]);
    }
  }
  return sum;
}

let numbers = [1, [2], [2, 3, [4]]];
console.log(SumAllNumbers2(numbers));
