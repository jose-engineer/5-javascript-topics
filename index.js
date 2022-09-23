// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


//Add element to an array
var arr = ['b', 'c', 'd'];

arr = [...arr, 'end']
//arr.push('end');
//arr.unshift('start');

console.log(arr);

//Add private variable
function secretVariable(){
  var secret = "private inside variable";

  return function (){
    return secret;
  }  
}

var getPrivate = secretVariable();

//console.log(secretVariable()); //does not work
console.log(getPrivate());  //works fine