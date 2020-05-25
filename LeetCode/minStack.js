/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    // if(!this.minStack.slice(-1)[0] || this.minStack.slice(-1)[0] >= x){
    //     this.minStack.push(x)
    // }
    const length = this.minStack.length;
    if (!length || x <= this.minStack[length - 1]) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // if(this.stack.slice(-1)[0]){
    //     let popVal = this.stack.pop()
    //     if(popVal === this.minStack.slice(-1)[0]){
    //         this.minStack.pop()
    //     }
    // }
    const { minStack, stack } = this;
    if (minStack[minStack.length - 1] === stack[stack.length - 1]) {
        minStack.pop();
    }
    stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.slice(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack.slice(-1)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
// let test = new MinStack()
// test.push(2)
// test.push(0)
// test.push(3)
// test.push(0)
// console.log(test.stack)
// console.log(test.minStack)