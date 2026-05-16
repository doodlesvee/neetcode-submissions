class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
         const speedPosition = [];
  const stack = [];

  for (let i = 0; i < position.length; i++) {
    speedPosition.push({ pos: position[i], s: speed[i] });
  }

  const sortedCarPos = speedPosition.sort((a, b) => b.pos - a.pos);

  for (let i = 0; i < speedPosition.length; i++) {
    const { pos, s } = speedPosition[i];
    const time = (target - pos) / s;

    if (!stack.length || stack[stack.length - 1] < time) stack.push(time);
  }

  return stack.length;
    }
}
