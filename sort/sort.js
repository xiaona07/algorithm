//冒泡排序
let bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
//快速排序
let quickSort = function (arr, left, right) {
    if (!left && !right) {
        let left = 0, right = arr.length - 1
    }
    if (left >= right) {
        return;
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


//大顶堆
let heapSort = function (arr) {
    let len = arr.length - 1
    let index = Math.floor(arr.length / 2 - 1)
    for (let i = index; i >= 0; i--) {
        downSort(arr, i)
    }
    let downSort = function (tree, idx) {
        let len = tree.length - 1
        let left = 2 * idx + 1
        let right = 2 * idx + 2
        if (left <= len && tree[idx] < tree[left]) {
            swap(tree, idx, left)
            downSort(tree, left)
        }
        if (right <= len && tree[idx] < tree[right]) {
            swap(tree, idx, right)
            downSort(tree, right)
        }
    };

    let swap = function (tree, i, j) {
        [tree[i], tree[j]] = [tree[j], tree[i]]
    }
}
