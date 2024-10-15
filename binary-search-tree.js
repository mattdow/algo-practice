
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if(newNode.value < root.value) {
      if(root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if(root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if(root === null) {
      return false;
    }
    if(value < root.value) {
      return this.search(root.left, value);
    } else if(value > root.value) {
      return this.search(root.right, value);
    } else {
      return true;
    }
  }

  preOrder(root) {
    if(root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if(root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  pot(root) {
    if(root) {
      this.pot(root.left);
      this.pot(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while(queue.length) {
      const node = queue.shift();
      console.log(node.value);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
  }

  min(root) {
    if(root.left === null) {
      return root.value;
    }
    return this.min(root.left);
  }

  max(root) {
    if(root.right === null) {
      return root.value;
    }
    return this.max(root.right);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if(root === null) {
      return root;
    }
    if(value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if(value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if(root.left === null && root.right === null) {
        root = null;
      } else if(root.left === null) {
        root = root.right;
      } else if(root.right === null) {
        root = root.left;
      } else {
        const minRight = this.min(root.right);
        root.value = minRight;
        root.right = this.deleteNode(root.right, minRight);
      }
    }
    return root;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

bst.pot(bst.root);
