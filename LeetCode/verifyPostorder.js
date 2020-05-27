/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if (postorder.length < 3) {
        return true
    }
    let lastIndex = postorder.length - 1
    let lastVal = postorder[lastIndex]
    let i = 0
    while(postorder[i] < lastVal){
        i++
    }
    let j = i
    while (j < lastIndex) {
        if (postorder[j] < lastVal) {
            return false
        }
        j++
    }
    return verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i, lastIndex));
};