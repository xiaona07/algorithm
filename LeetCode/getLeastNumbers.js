/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//基于冒泡排序
var getLeastNumbers1 = function (arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr.slice(0, k)
};
//基于快速排序
var getLeastNumbers2 = function (arr, k) {
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
        if (i === k - 1) {
            return
        }
        if (i > k - 1) {
            return quickSort(arr, left, i - 1);
        }
        if (i < k - 1) {
            return quickSort(arr, i + 1, right);
        }
    }
    quickSort(arr, 0, arr.length - 1)
    return arr.slice(0, k)
};
//基于大顶堆
var getLeastNumbers3 = function(arr, k) {
    let tree = arr.slice(0, k)
    let len = tree.length - 1
    let sort = function (tree) {
        let index = Math.floor(tree.length / 2 - 1)
        for (let i = index; i >= 0; i--) {
            downSort(tree, i)
        }
    }
    // let downSort = function (tree, idx) {
    //     let left = 2 * idx + 1
    //     let right = 2 * idx + 2
    //     if (left <= len && tree[idx] < tree[left]) {
    //         if (right <= len && tree[left] < tree[right]) {
    //             swap(tree, idx, right);
    //             return downSort(tree, right);
    //         }
    //         swap(tree, idx, left)
    //         return downSort(tree, left)
    //     }
    //     if (right <= len && tree[idx] < tree[right]) {
    //         swap(tree, idx, right);
    //         return downSort(tree, right);
    //     }
    // }
    let downSort = function (tree, idx) {
        let now = idx
        let left = 2 * now + 1
        let right = 2 * now + 2
        while (now <= len && left <= len) {
            if (tree[now] < tree[left]) {
                if (right <= len && tree[left] < tree[right]) {
                    swap(tree, now, right);
                    now = right
                } else {
                    swap(tree, now, left);
                    now = left
                }
                left = 2 * now + 1
                right = 2 * now + 2
            } else if (right <= len && tree[now] < tree[right]) {
                swap(tree, now, right);
                now = right
                left = 2 * now + 1
                right = 2 * now + 2
            } else {
                break
            }
        }
    }
    let swap = function (tree, i, j) {
        [tree[i], tree[j]] = [tree[j], tree[i]]
    }
    sort(tree)
    for (let i = k; i < arr.length; i++) {
        if (tree[0] > arr[i]) {
            tree[0] = arr[i]
            downSort(tree, 0)
        }
    }
    return tree
};


let arr = [0, 0, 1, 2, 4, 2, 2, 3, 1, 4]
let k = 8
console.log(getLeastNumbers2(arr, k))
