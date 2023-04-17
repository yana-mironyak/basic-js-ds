const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
    this.list = null;
    this.queue = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.list) {
      this.list = this.queue = node;
    } else {
      this.queue.next = node;
      this.queue = node;
    }
  }

  dequeue() {
    const val = this.list.value;
    this.list = this.list.next;

    return val;
  }
}

module.exports = {
  Queue,
};
