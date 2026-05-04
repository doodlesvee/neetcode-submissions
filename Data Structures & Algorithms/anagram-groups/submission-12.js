class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const groupedAnagram = {};

  for (let word of strs) {
    const alphabetArr = new Array(26).fill(0);

    for (let char of word) {
      alphabetArr[char.charCodeAt() - 97]++;
    }

    let key = alphabetArr.toString();
    if (!groupedAnagram[key]) {
      groupedAnagram[key] = [];
    }

    groupedAnagram[key].push(word);
  }

  return Object.values(groupedAnagram);    }
    
}

