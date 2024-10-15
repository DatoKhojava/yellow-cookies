// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

console.log("--------------------Linked List----------------------------")

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++; 
  }
  
  remove(value) {
    if (!this.head) return; 

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  display() {
    let current = this.head;
    const elements = [];

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    console.log(elements.join(" -> "));
  }
  
  getSize() {
    return this.size;
  }

  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
}

// Example usage:
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.display();

list.remove(20);
list.display();