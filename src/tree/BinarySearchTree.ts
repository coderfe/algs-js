class TreeNode {
  key: number;
  left: TreeNode;
  right: TreeNode;

  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

type Callbackfn = (value: number) => void;

class BinarySearchTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  insert(key: number) {
    if (this.root === null) {
      this.root = new TreeNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  inOrderTraverse(callback: Callbackfn) {
    this.inOderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback: Callbackfn) {
    this.preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback: Callbackfn) {
    this.postOrderTraverseNode(this.root, callback);
  }

  min() {
    return this.minNode(this.root);
  }

  max() {
    return this.maxNode(this.root);
  }

  search(key: number) {
    return this.searchNode(this.root, key);
  }

  remove(key: number) {
    this.root = this.removeNode(this.root, key);
  }
  private removeNode(node: TreeNode, key: number) {
    if (node === null) return null;

    if (this.lessThen(node.key, key)) {
      this.removeNode(node.right, key);
    } else if (this.biggerThen(node.key, key)) {
      this.removeNode(node.left, key);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }

    return new TreeNode(1);
  }

  private searchNode(node: TreeNode, key: number): boolean {
    if (node === null) return false;
    if (this.lessThen(node.key, key)) {
      return this.searchNode(node.right, key);
    } else if (this.biggerThen(node.key, key)) {
      return this.searchNode(node.left, key);
    } else {
      return true;
    }
  }

  private maxNode(node: TreeNode) {
    let curr = node;
    while (curr !== null && curr.right !== null) {
      curr = node.right;
    }
    return curr;
  }

  private minNode(node: TreeNode) {
    let curr = node;
    while (curr !== null && node.left !== null) {
      curr = node.left;
    }
    return curr;
  }

  private postOrderTraverseNode(node: TreeNode, callback: Callbackfn) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  private preOrderTraverseNode(node: TreeNode, callback: Callbackfn) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  private inOderTraverseNode(node: TreeNode, callback: Callbackfn) {
    if (node !== null) {
      callback(node.key);
      this.inOderTraverseNode(node.left, callback);
      this.inOderTraverseNode(node.right, callback);
    }
  }

  private insertNode(node: TreeNode, key: number) {
    if (this.lessThen(node.key, key)) {
      if (node.right === null) {
        node.right = new TreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    } else {
      if (node.left === null) {
        node.left = new TreeNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    }
  }

  private lessThen(a: number, b: number) {
    return a < b;
  }
  private biggerThen(a: number, b: number) {
    return a > b;
  }
}
