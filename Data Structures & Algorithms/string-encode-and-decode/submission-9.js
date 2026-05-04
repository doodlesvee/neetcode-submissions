class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = "";

  for (let word of strs) {
    s += `${word.length}#${word}`;
  }
  return s;
  }


    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
         let arr = [];
  for (let i = 0; i < str.length; ) {
    let j = i;

    while (true) {
      if (str[j] === "#") break;
      j++;
    }

    const length = parseInt(str.slice(i, j));
    let word = str.slice(j + 1, j + 1 + length);

    arr.push(word);
    i = j + 1 + length;
  }

  return arr;
    }
    }