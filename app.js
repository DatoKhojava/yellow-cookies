function myFilter(callback, obj) {
  // check on error
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} isnt a function! plase pass a function`);
  }

  const res = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(obj, this[i], i, this)) {
        res.push(this[i]);
      }
    }
  }

  return res;
}

Array.prototype.myFilter = myFilter;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.myFilter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// -------------------------------------------------------------------

const JSConfirm = window.confirm;
const JSAlert = window.alert;
const JSPrompt = window.prompt;

window.alert = function (message) {
  return JSConfirm(message);
};

window.prompt = function (message, defaultValue) {
  JSAlert(message);
  return defaultValue;
};

window.confirm = function (message) {
  return JSPrompt(message, "");
};

const result = window.alert("Are you fan of Lord of the Rings?");
console.log("Alert returned:", result);

const userInput = window.prompt("What race do you represent?", "Human");
console.log("User input:", userInput);

const userResponse = window.confirm("Speak friend and enter:");
if (userResponse == null || userResponse == "") {
  console.log("Speak!!!!");
} else if (userResponse === "Mellon") {
  console.log("The door is open");
} else {
  console.log("You are not welcomed in Moria");
}
