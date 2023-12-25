const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNewData(this.rootNode, data);
    function addNewData(node, newData) {
      if (!node) {
        return new Node(newData);
      }

      if (node.data === newData) {
        return node;
      }

      if (newData > node.data) {
        node.right = addNewData(node.right, newData);
      } else {
        node.left = addNewData(node.left, newData);
      }
      return node;

    }
  }


  has(data) {
    if (this.findData(this.rootNode, data)) { return true; }
    return false;
  }

  find(data) {
    return this.findData(this.rootNode, data);
  }

  findData(node, data) {
    if (node) {
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        return this.findData(node.left, data);
      }
      if (data > node.data) {
        return this.findData(node.right, data);
      }
    } else { return null; }
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data);

    function removeData(node, data) {

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        if (!node.left && !node.right) return null;

        let right = node.right;
        while (right.left) {
          right = right.left;
        }
        node.data = right.data;
        node.right = removeData(node.right, right.data);
        return node;
      }
    }
  }

  min() {
    let min = this.rootNode;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    let max = this.rootNode;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};