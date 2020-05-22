/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
        let max = Math.pow(10, n) - 1
        let arr = new Array(max)
        for (let i = 0; i < max; i++) {
            arr[i] = i + 1
        }
        return arr
    };