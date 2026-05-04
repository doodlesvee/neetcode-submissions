class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const groups = {};

  for (const word of strs) {
    const count = new Array(26).fill(0);

    for (const char of word) {
      count[char.charCodeAt(0) - 97]++;
    }

    const key = count.join("#");

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(word);
  }

  return Object.values(groups);
    }
    
}

