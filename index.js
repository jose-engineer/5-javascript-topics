// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// 1.- Add element to an array
var arr = ['b', 'c', 'd'];

arr = [...arr, 'end']
//arr.push('end');
//arr.unshift('start');

console.log(arr);

// 2.- Add private variable
function secretVariable(){
  var secret = "private inside variable";

  return function (){
    return secret;
  }  
}

var getPrivate = secretVariable();

//console.log(secretVariable()); //does not work
console.log(getPrivate());  //works fine

// 3.- What is the output?
var num = 4;
function outer(){
  var num = 2;

  function inner(){
    num++;
    var num = 3;
    console.log(num);
  }

  inner();
}

outer();//output will be 3.

// 4.- What is the output?
console.log(typeof( typeof(1) )); //typeof("number"), so output is "string"

// 5.- What is the output?
var hero =  {
  _name: 'John Doe',
  getSecretIdentity: function(){
    return this._name;
  }
};

var stolenIdentity = hero.getSecretIdentity;

console.log(hero.getSecretIdentity()); //John Doe
console.log(stolenIdentity()); //Undefined

// var stolenIdentity = hero.getSecretIdentity.bind(hero);

// console.log(hero.getSecretIdentity()); //John Doe
// console.log(stolenIdentity()); //John Doe