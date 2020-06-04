/**
 * @param {number[]} arr
 * @param l {number}
 * @param r {number}
 * @return {number[]}
 */
var quickSort = function (arr, l, r) {
    let len = r - l
    if (len > 1) {
        let p = partition2(arr, l, r)
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
var partition2 = function (arr, left, right) {
    let pivot = arr[left]
    let l = left + 1, r = right
    while (l < r) {
        while (l < r && arr[l] <= pivot) {
            l++;
        }
        while (r > l && arr[r-1] > pivot) {
            r--;
        }
        if (l < r) {
            swap(arr, l, r)
        }
    }
    swap(arr, left, l-1)
    return l-1
}

var swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
let array = [7,6,5,4,3,2,1]

console.log(quickSort(array, 0, array.length))
