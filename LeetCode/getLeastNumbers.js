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
//大顶堆
var getLeastNumbers3 = function(arr, k) {
    let tree = arr.slice(0, k)
    let sort = function (tree) {
        let len = tree.length - 1
        let index = Math.floor(tree.length / 2 - 1)
        for (let i = index; i >= 0; i--) {
            if(tree[i] < tree[2*i + 1]){
                [tree[i], tree[2*i + 1]] =  [tree[2*i + 1], tree[i]]
                down(tree, 2*i + 1)
            }
            if((2*i + 2) <= len &&  tree[i] < tree[2*i + 2]){
                [tree[i], tree[2*i + 2]] =  [tree[2*i + 2], tree[i]]
                down(tree, 2*i + 2)
            }
        }
    }
    let down = function (tree, idx) {
        let len = tree.length - 1
        // if(idx > len){
        //     return
        // }
        if((2*idx + 1) <= len && tree[idx] < tree[2*idx + 1]){
            [tree[idx], tree[2*idx + 1]] = [tree[2*idx + 1], tree[idx]]
            down(tree, 2*idx + 1)
        }
        if((2*idx + 2) <= len && tree[idx] < tree[2*idx + 2]){
            [tree[idx], tree[2*idx + 2]] = [tree[2*idx + 2], tree[idx]]
            down(tree, 2*idx + 2)
        }
    };
    sort(tree)
    console.log(tree)
    for (let i = k; i < arr.length; i++) {
        if (tree[0] > arr[i]) {
            tree[0] = arr[i]
            down(tree, 0)
        }
    }
    return tree
};
//大顶堆代码简化
var getLeastNumbers4 = function(arr, k) {
    let tree = arr.slice(0, k)
    let downSort = function (tree, idx) {
        let len = tree.length - 1
        let left = 2 * idx + 1
        let right = 2 * idx + 2
        if(left <= len && tree[idx] < tree[left]){
            swap(tree, idx, left)
            downSort(tree, left)
        }
        if(right <= len && tree[idx] < tree[right]){
            swap(tree, idx, right)
            downSort(tree, right)
        }
    };
    let sort = function (tree) {
        let index = Math.floor(tree.length / 2 - 1)
        for (let i = index; i >= 0; i--) {
            downSort(tree, i)
        }
    }
    let swap = function (tree, i, j){
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
var getLeastNumbers5 = function(arr, k) {
    let tree = arr.slice(0, k)
    let len = tree.length - 1
    let sort = function (tree) {
        let index = Math.floor(tree.length / 2 - 1)
        for (let i = index; i >= 0; i--) {
            downSort(tree, i)
        }
    }
    let downSort = function (tree, idx) {
        let left = 2 * idx + 1
        let right = 2 * idx + 2
        if(left <= len && tree[idx] < tree[left]){
            swap(tree, idx, left)
            downSort(tree, left)
        }
        if(right <= len && tree[idx] < tree[right]){
            swap(tree, idx, right)
            downSort(tree, right)
        }
    };
    let swap = function (tree, i, j){
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
