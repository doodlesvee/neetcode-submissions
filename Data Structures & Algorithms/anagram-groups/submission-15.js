class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map()
        for (const word of strs) {
  const key = new Array(26).fill(0);

  for (const ch of word) {
    key[ch.charCodeAt(0) - 97]++;
  }

  const keyStr = key.join('#');

  if (!map.has(keyStr)) {
    map.set(keyStr, []);
  }

  map.get(keyStr).push(word);
}
  return [...map.values()];

    }
}
