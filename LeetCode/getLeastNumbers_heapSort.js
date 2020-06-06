/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 100ms 94%
 */
var getLeastNumbers = function(arr, k) {
    function heapAdjust(d, index, end) {
        for (let i = index; i < end;) {
            let left = 2*i + 1
            let right = 2*i + 2
            let maxIndex = findMax(d, end,i, left, right)
            if (maxIndex === i) {
                return
            }
            if (maxIndex === left) {
                swap(d,i,left)
                i = left
            } else {
                swap(d,i,right)
                i = right
            }
        }
    }
    var swap = function (arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    function findMax(d , end, ...idxArray)  {
        let maxIdx = idxArray[0]
        for (let idx of idxArray) {
            if (idx< end && d[idx] > d[maxIdx]) {
                maxIdx = idx
            }
        }
        return maxIdx
    }
    function buildMaxHeap(d,length) {
        if (length === 1) {
            return
        }
        let first = Math.floor(length/2 - 1)
        for (let i = first; i >= 0; i--) {
            heapAdjust(d, i, length)
        }
    }

    buildMaxHeap(arr,k)
    for (let i = k; i < arr.length; i++) {
        if(arr[i]<arr[0]){
            swap(arr,0,i)
            heapAdjust(arr,0,k)
        }
    }
    return arr.slice(0,k)
};



var getLeastNumbers = function(arr, k) {
    if (k === 0 || arr.length === 0) {
        return [];
    }
    // 统计每个数字出现的次数
    let counter = new Array(10001).fill(0);
    for (let num of arr) {
        counter[num]++;
    }
    // 根据counter数组从头找出k个数作为返回结果
    let res = new Array(k);
    let idx = 0;
    for (let num = 0; num < counter.length; num++) {
        while (counter[num]-- > 0 && idx < k) {
            res[idx++] = num;
        }
        if (idx === k) {
            break;
        }
    }
    return res;
}
