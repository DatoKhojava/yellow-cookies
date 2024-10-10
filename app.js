class Calculator {
  #_numberX;
  #_numberY;

  constructor(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Inputed values must be numbers");
    }
    this.#_numberX = x;
    this.#_numberY = y;
    this.logSum = this.logSum.bind(this);
  }

  get numberX() {
    return this.#_numberX;
  }

  set numberX(val) {
    if (typeof val !== "number") {
      throw new Error("Value of X must be String!");
    } else {
      this.#_numberX = val;
    }
  }

  get numberY() {
    return this.#_numberY;
  }

  set numberY(val) {
    if (typeof val !== "number") {
      throw new Error("Value of Y must be String!");
    } else {
      this.#_numberY = val;
    }
  }

  logSum() {
    return this.#_numberX + this.#_numberY;
  }

  logMul() {
    return this.#_numberX - this.#_numberY;
  }

  logSub() {
    return this.#_numberX * this.#_numberY;
  }

  logDiv() {
    return this.#_numberX / this.#_numberY;
  }
}

const calculator = new Calculator(4, 6);
console.log(calculator.logSum());

calculator.numberX = 10;
console.log(calculator.logDiv());

const logSumRef = calculator.logSum;
console.log("sum is =", logSumRef());
