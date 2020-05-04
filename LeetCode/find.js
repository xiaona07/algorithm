/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return false
    }
    let a = matrix.length - 1
    let b = 0
    while (a >= 0 && b <= matrix[a].length - 1) {
        let now = matrix[a][b]
        // if ((a === 0 && b === matrix[a].length - 1) && (target !== now)){
        //     return false
        // }
        if (target === now) {
            return true
        }
        if (target > now) {
            b++
        } else {
            a--
        }
    }
    return false
};
let mat1 = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
let mat2 = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]
let mat3 = [[-1, 3]]
target1 = 3
target2 = 20
console.log(findNumberIn2DArray(mat3, target1))

