class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
         const stack = [];
  const result = new Array(t.length).fill(0);

  for (let i = 0; i < t.length; i++) {
    while (stack.length && t[i] > t[stack[stack.length - 1]]) {
      const oldIdx = stack.pop();
      result[oldIdx] = i - oldIdx;
    }

    stack.push(i);
  }

  return result;
    }
}
