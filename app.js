let num = true + false;
let num2 = true + true;

console.log(num + num2); // Output 3

let strVal = "8";
let numVal = 8;

console.log(strVal - numVal); // Output: 0

console.log(NaN === NaN); // Output: false

// -----------------------------------------------------------------------------------

const form = document.getElementById('form');
const userinput = document.getElementById('user_input');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userInput = parseInt(userinput.value);
  const res = userInput.toString(2);

  alert(`Binary value of ${userinput.value} is: ${res}`);
});
