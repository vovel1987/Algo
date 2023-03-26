class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    // this.parent = null;
  }
}

let me = new Node("me");
let dad = new Node("dad");
let mom = new Node("mom");
me.left = dad;
me.right = mom;

let opa = new Node("opa");
let oma = new Node("oma");
let opa2 = new Node("opa2");
let oma2 = new Node("oma2");

me.left.left = opa;
me.left.right = oma;
me.right.left = opa2;
me.right.right = oma2;

opa.left = new Node("opaFather");
opa.right = new Node("opaMother");

class Print {
  constructor() {
    this.st = "";
    this.orderPrint2 = (root) => {
      if (root !== null) {
        this.st += `${root.value}`;
      }
      if (root.right !== null || root.left !== null) {
        this.st += "(";
        if (root.left !== null) {
          this.orderPrint2(root.left);
        } else {
          this.st += "null";
        }
        this.st += ",";

        if (root.right !== null) {
          this.orderPrint2(root.right);
        } else {
          this.st += "null";
        }
        this.st += ")";
      }
      return this.st;
    };

    this.orderPrint = (root) => {
      this.st = "";
      this.orderPrint2(root);
      return this.st;
    };
  }
}

let printTree = new Print();
let result = printTree.orderPrint(me);
console.log(result);
