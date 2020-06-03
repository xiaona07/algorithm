/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//冒泡排序
var getLeastNumbers1 = function(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr.slice(0, k)
};
//快速排序
var getLeastNumbers2 = function(arr, k) {
    let quickSort = function (arr, left, right) {
        if (left >= right) {
            return
        }
        let i = left, j = right, basis = arr[left]
        while (i < j) {
            while (arr[j] >= basis && i < j) {
                j--
            }
            if (i < j) {
                arr[i++] = arr[j]
            }
            while (arr[i] <= basis && i < j) {
                i++
            }
            if (i < j) {
                arr[j--] = arr[i]
            }
        }
        arr[i] = basis
        quickSort(arr, left, i - 1)
        quickSort(arr, i + 1, right)
    }
    quickSort(arr, 0 , arr.length - 1)
    return arr.slice(0, k)
};
