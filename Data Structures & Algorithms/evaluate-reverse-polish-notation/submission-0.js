class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const arr = [];
  let result = null;
  for (let val of tokens) {
    if (["+", "-", "*", "/"].includes(val)) {
      let str = "";
      let a = arr.pop();
      let b = arr.pop();

      if (val === "+") result = b + a;
      if (val === "-") result = b - a;
      if (val === "*") result = b * a;
      if (val === "/") result = Math.trunc(b / a);

      arr.push(result);
    } else {
      arr.push(parseInt(val));
    }
  }

  return arr.pop();
    }
}
