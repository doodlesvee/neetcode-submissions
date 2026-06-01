class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let v = null;
    if (this.keyStore.get(key)) {
      v = [...this.keyStore.get(key), { value, timestamp }];
    } else {
      v = [{ value, timestamp }];
    }
    this.keyStore.set(key, v);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
         const keyData = this.keyStore.get(key);
         if(!keyData) return ""
    let left = 0,
      right = keyData.length - 1,
      result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (keyData[mid].timestamp === timestamp) {
        return keyData[mid].value;
      }

      if (keyData[mid].timestamp < timestamp) {
        result = keyData[mid].value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result
    }
}
