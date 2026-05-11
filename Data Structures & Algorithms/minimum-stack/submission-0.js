class MinStack {
    constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if (!this.minStack.length || this.minStack.at(-1) >= val)
      this.minStack.push(val);
    this.stack.push(val);
  }

  pop() {
    let val = this.stack.pop();
    if (val === this.minStack.at(-1)) this.minStack.pop();

    return val
  }

  getMin() {
    return this.minStack.at(-1);
  }

  top() {
    return this.stack.at(-1);
  }
}
