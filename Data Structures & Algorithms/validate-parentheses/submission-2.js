class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(ip) {
        if(!ip.length || ip.length === 1) return false
        const arr = [];

  for (let val of ip) {
    if (val === "[" || val === "(" || val === "{") {
      arr.push(val);
    }

    if (val === "]") {
      if (arr.pop() !== "[") return false;
    }

    if (val === ")") {
      if (arr.pop() !== "(") return false;
    }

    if (val === "}") {
      if (arr.pop() !== "{") return false;
    }
  }

    if(arr.length) return false


  return true;
    }
}
