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
            return down(tree, 2*idx + 1)
        }
        if((2*idx + 2) <= len && tree[idx] < tree[2*idx + 2]){
            [tree[idx], tree[2*idx + 2]] = [tree[2*idx + 2], tree[idx]]
            return down(tree, 2*idx + 2)
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

let arr = [0,1,1,1,4,5,3,7,7,8,10,2,7,8,0,5,2,16,12,1,19,15,5,18,2,2,22,15,8,22,17,6,22,6,22,26,32,8,10,11,2,26,9,12,9,7,28,33,20,7,2,17,44,3,52,27,2,23,19,56,56,58,36,31,1,19,19,6,65,49,27,63,29,1,69,47,56,61,40,43,10,71,60,66,42,44,10,12,83,69,73,2,65,93,92,47,35,39,13,75]
let k = 75
console.log(getLeastNumbers3(arr, k))
