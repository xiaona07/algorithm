/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
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
console.log(validateStackSequences([4,0,1,2,3],[4,2,3,0,1]))