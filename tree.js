const assert = require("assert");

class Operation {
  constructor(left, right) {
    this.right = right;
    this.left = left;
  }
  calculate() {
    return 0;
  }
  toString() {
    return "";
  }
}

class Sum extends Operation {
  constructor(left, right) {
    super(left, right);
  }
  calculate() {
    return this.left.result() + this.right.result();
  }
  toString() {
    return `(${this.left.toString()} + ${this.right.toString()})`;
  }
}

class Subtruct extends Operation {
  constructor(left, right) {
    super(left, right);
  }
  calculate() {
    return this.left.result() - this.right.result();
  }
  toString() {
    return `(${this.left.toString()} - ${this.right.toString()})`;
  }
}

class Multiply extends Operation {
  constructor(left, right) {
    super(left, right);
  }
  calculate() {
    return this.left.result() * this.right.result();
  }
  toString() {
    return `(${this.left.toString()} x ${this.right.toString()})`;
  }
}
class Divide extends Operation {
  constructor(left, right) {
    super(left, right);
  }
  calculate() {
    return this.left.result() / this.right.result();
  }
  toString() {
    return `(${this.left.toString()} ÷ ${this.right.toString()})`;
  }
}

const operatorFactory = (operator, left, right) => {
  switch (operator) {
    case "+":
      return new Sum(left, right);
    case "-":
      return new Subtruct(left, right);
    case "x":
      return new Multiply(left, right);
    case "÷":
      return new Divide(left, right);
    default:
      return undefined;
  }
};

const Node = (operator, value, left, right) => {
  const operation = operatorFactory(operator, left, right);
  const result = function () {
    if (operation) {
      return operation.calculate();
    }
    return value;
  };

  const toString = function () {
    if (operation) {
      return operation.toString();
    }
    return value.toString();
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString,
  };
};

const tree = Node(
  "÷",
  null,
  Node(
    "+",
    null,
    Node("", 7, null, null),
    Node(
      "x",
      null,
      Node("-", null, Node("", 3, null, null), Node("", 2, null, null)),
      Node("", 5, null, null)
    )
  ),
  Node("", 6, null, null)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
