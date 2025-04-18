class Node {
  constructor(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.track = new Node(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const newUrlNode = new Node(url);
  if (this.track.next) {
    this.track.next.prev = null;
  }
  this.track.next = newUrlNode;
  newUrlNode.prev = this.track;
  this.track = newUrlNode;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let currSteps = 0;
  while (this.track.prev && currSteps < steps) {
    this.track = this.track.prev;
    currSteps++;
  }

  return this.track.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let currSteps = 0;
  while (this.track.next && currSteps < steps) {
    this.track = this.track.next;
    currSteps++;
  }

  return this.track.url;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
