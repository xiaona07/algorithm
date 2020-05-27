/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences2 = function(pushed, popped) {
    let index = pushed.indexOf(popped[0])
    let arr
    if (index === 0) {
        arr = []
    }else {
        arr = pushed.slice(0, index)
    }

    for (let i = 1; i < popped.length; i++) {
        if(arr.indexOf(popped[i]) !== -1){
            let now = arr.pop()
            if (now !== popped[i]) {
                return false
            }
        }else {
            let idx = pushed.indexOf(popped[i])
            arr = arr.concat(pushed.slice(index+1, idx))
            index = idx
        }
    }
    return true
};

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    /*
    贪心算法，
    1. 建一个辅助栈，将push元素一直放，直到元素等于popped顶部元素， 一块出栈
    */
    let stack = [];
    let i = 0;
    for(let num of pushed) {
        stack.push(num); // num 入栈
        while(stack.length > 0 && stack[stack.length-1]=== popped[i]) { // 循环判断与出栈
            stack.pop();
            i++;
        }
    }
    return stack.length === 0;
};
console.log(validateStackSequences([4,0,1,2,3],[4,2,3,0,1]))