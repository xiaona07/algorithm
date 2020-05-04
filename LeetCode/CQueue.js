var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // if(!this.inStack.length){
    //     return -1
    // }
    // while (this.inStack.length){
    //     this.outStack.push(this.inStack.pop())
    // }
    // let res = this.outStack.pop()
    // while (this.outStack.length){
    //     this.inStack.push(this.outStack.pop())
    // }
    // return res
    const { inStack, outStack } = this;
    if (outStack.length) {
        return outStack.pop();
    } else {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
        return outStack.pop() || -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */