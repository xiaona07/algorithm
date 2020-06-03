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
        console.log(p)
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
    let l = left + 1, r = right - 1
    while (l < r) {
        while (l < r && arr[l] <= pivot) {
            l++;
        }
        while (r > l && arr[r] > pivot) {
            r--;
        }
        if (l < r) {
            swap(arr, l, r)
        }
    }
    swap(arr, left, l)
    return l
}

var swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
let array = [6, 5, 4, 3, 2, 1, 7, 8, 9]

console.log(quickSort(array, 0, array.length))
