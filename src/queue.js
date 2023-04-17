const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

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
  constructor(el) {
    this.head = null;
    this.length = 0;
    this.el = el;
    this.next = null;
  }
  getUnderlyingList() {}

  enqueue(el) {
    const queue = new Queue(el);

    if (this.length === 0) {
      this.head = queue;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Queue(el);
    }

    this.length++;
  }

  dequeue() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue,
};
