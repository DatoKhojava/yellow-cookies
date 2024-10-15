// Stack with array
// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(item) {
//     this.items.push(item);
//   }

//   pop() {
//     if (this.items.length === 0) {
//       return "Stack is empty";
//     }
//     return this.items.pop();
//   }

//   peek() {
//     if (this.items.length === 0) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }

//   printStack() {
//     return this.items.map((item) => item);
//   }
// }

// ---------------------------------------------------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || maxSize <= 0) {
      throw new Error("Max size must be a positive integer.");
    }

    this.maxSize = maxSize;
    this.top = null;
    this.size = 0;
  }

  push(item) {
    if (this.size >= this.maxSize) {
      throw new Error("Stack is full.");
    }

    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    }

    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;

    return poppedValue;
  }

  peek() {
    if (this.top) {
      return this.top.value;
    }

    return null;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const elements = [];
    let current = this.top;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    return elements;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("Provided entity is not iterable.");
    }

    const stack = new Stack(iterable.length);

    for (const item of iterable) {
      stack.push(item);
    }

    return stack;
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.toArray());

const iterableStack = Stack.fromIterable([40, 50, 60]);
console.log(iterableStack.toArray());