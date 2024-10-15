class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  isEmpty() {
      return this.length === 0;
  }

  getSize() {
      return this.length;
  }

  prepend(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;  
  }

  append(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  removeFromFront() {
    if(this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return value;
  }

  removeFromBack() {
    if(this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      while(temp.next !== this.tail) {
          temp = temp.next;
      }
      temp.next = null;
      this.tail = temp;
    }
    this.length--;
    return value;
  }

  insertValue(value, index) {
    if(index < 0 || index > this.length) {
        return;
    }
    if(index === 0) {
        this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for(let i = 0; i < index - 1; i++) {
          prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.length++;
    }    
  }

  removeFrom(index) {
    if(index < 0 || index >= this.length) {
        return null;
    }
    let removedNode;
    if(index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
    } else {
      let prev = this.head;
      for(let i = 0; i < index - 1; i++) {
          prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.length--;
    return removedNode.value;
  }

  removeValue(value) {
    if(this.isEmpty()) {
      return null;
    }
    if(this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return value;
    } else {
      let prev = this.head;
      while(prev.next && prev.next.value !== value) {
          prev = prev.next;
      }
      if(prev.next) {
          prev.next = prev.next.next;
          this.length--;
          return value;
      }
      return null;
    }
  }

  search(value) {
    if(this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while(curr) {
      if(curr.value === value) {
          return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while(curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if(this.isEmpty()) {
        console.log('List is empty');
    } else {
      let temp = this.head;
      let listValues = '';
      while(temp !== null) {
          listValues += temp.value + ' ';
          temp = temp.next;
      }
      console.log(listValues);
    }
  }
}

module.exports = LinkedList;