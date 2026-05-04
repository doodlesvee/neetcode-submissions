class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length) {
    for (let i = 0; i < strs.length; i++) {
      let elem = strs[i];

      if (isNaN(elem.charCodeAt())) {
        strs[i] = NaN;
      }
    }

    return strs.join("_i_");
  }

  return "";
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length) {
    const arr = str.split("_i_");

    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "NaN") {
        arr[i] = "";
      }
    }

    return arr;
  }

  return [];
    }
    }