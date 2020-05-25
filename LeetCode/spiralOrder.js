/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length
    if(!m){
        return []
    }
    let n = matrix[0].length
    if (!n) {
        return []
    }
    let arr = new Array(m * n)
    let index = 0
    let m1 = 0, m2 = matrix[0].length - 1, m3 = matrix.length - 1
    while (m2 >= m1 && m3 >= m1) {
        for (let i = m1; i <= m2 ; i++) {
            arr[index] = matrix[m1][i]
            index++
        }
        if(m3 > m1){
            for (let i = m1 + 1; i <= m3 ; i++) {
                arr[index] = matrix[i][m2]
                index++
            }
        }
        if (m2 - 1 > m1 && m3 > m1) {
            for (let i = m2 - 1; i > m1; i--) {
                arr[index] = matrix[m3][i]
                index++
            }
        }
        if (m2 > m1 && m3 > m1) {
            for (let i = m3; i > m1; i--) {
                arr[index] = matrix[i][m1]
                index++
            }
        }
        m1++
        m2--
        m3--
    }
    return arr
};
let test = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(spiralOrder(test))