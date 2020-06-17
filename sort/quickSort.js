/**
 * @param {number[]} arr
 * @param l {number}
 * @param r {number}
 * @return {number[]}
 */
var quickSort = function (arr, l, r) {
    let len = r - l
    if (len > 1) {
        let p = partition(arr, l, r)
        quickSort(arr, l, p)
        quickSort(arr, p + 1, r);
    }
    return arr
};

var partition = function (arr, l, r) {
    let pivot = arr[l]
    let index = l + 1
    for (let i = index; i < r; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, index)
            index++
        }
    }
    swap(arr, l, index - 1)
    return index - 1
}
var swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


let array = [7,6,5,4,3,2,1]
console.log(quickSort(array, 0, array.length))
let array2 = [3, 4, 2, 1, 7, 6, 8, 9, 2, 3, 4]
console.log(quickSort(array2, 0, array2.length))
