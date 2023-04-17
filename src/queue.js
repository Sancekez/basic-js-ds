const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this._tail) {
      this._tail.next = newNode;
      this._tail = newNode;
    } else {
      this._head = newNode;
      this._tail = newNode;
    }
    this._size++;
  }

  dequeue() {
    if (!this._head) {
      return null;
    }
    const result = this._head.value;
    this._head = this._head.next;
    this._size--;
    if (!this._head) {
      this._tail = null;
    }
    return result;
  }
}

module.exports = {
  Queue
};
