/**
 * @param {number[]} arr
 * @param l {number}
 * @param r {number}
 * @return {number[]}
 */
var mergeSort = function (arr) {
    let len = arr.length
    if (len < 2) {
        return arr
    }
    let m = Math.floor(len / 2);
    return merge(mergeSort(arr.slice(0, m)), mergeSort(arr.slice(m)))
};


let merge = function (arrLeft, arrRight) {
    let leftLen = arrLeft.length, rightLen = arrRight.length
    let res = []
    let i = 0, j = 0
    for (; i < leftLen && j < rightLen;) {
        if (arrLeft[i] < arrRight[j]) {
            res.push(arrLeft[i++])
        } else {
            res.push(arrRight[j++])
        }
    }
    if (i < leftLen) {
        res.push(...arrLeft.slice(i))
    }
    if (j < rightLen) {
        res.push(...arrRight.slice(j))
    }
    return res
}

console.log(mergeSort([3, 2, 1]))

