class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


class LRUCache {
    constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.list = null;
    this.tail = null;
  }

  _removeNode(node) {
    if (!node) return;

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.list = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;
  }

  _addToHead(node) {
    node.prev = null;
    node.next = this.list;

    if (this.list) {
      this.list.prev = node;
    }

    this.list = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  _moveToHead(node) {
    if (node === this.list) return;
    this._removeNode(node);
    this._addToHead(node);
  }

  _evictTail() {
    if (!this.tail) return;
    const lru = this.tail;
    this._removeNode(lru);
    this.cache.delete(lru.key);
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this._moveToHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this._moveToHead(node);
    } else {
      if (this.capacity === 0) return;

      if (this.cache.size === this.capacity) {
        this._evictTail();
      }

      const node = new ListNode(key, value);
      this.cache.set(key, node);
      this._addToHead(node);
    }
  }
}
