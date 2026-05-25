class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
         let maxSpeed = 0;

  for (let i = 0; i < piles.length; i++)
    if (piles[i] > maxSpeed) maxSpeed = piles[i];

  let left = 0,
    right = maxSpeed,
    result = null;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let eatingHours = 0;

    for (let i = 0; i < piles.length; i++) {
      eatingHours += Math.ceil(piles[i] / mid);
    }

    if (eatingHours <= h) {
      result = mid; // mid works, but try slower (smaller k)
      right = mid - 1;
    } else {
      left = mid + 1; // too slow, need faster eating
    }
  }

  return result;
    }
}
