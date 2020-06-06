function heapSort(d) {
    buildMaxHeap(d)
    let length = d.length
    for (let i = length - 1; i > 0; i--) {
        swap(d,0,i)
        heapAdjust(d, 0, i)
    }
    return d
}

function buildMaxHeap(d) {
    let length = d.length;
    if (length === 1) {
        return
    }
    let first = Math.floor(length/2 - 1)
    for (let i = first; i >= 0; i--) {
        heapAdjust(d, i, length)
    }
}
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

function sortTest(arr, sortFun){
    let start = Date.now();
    let result=sortFun(arr);
    // console.log(result)
    let end = Date.now();
    console.log(end - start);
}

function randomArray(length, min, max) {
    let arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = parseInt((max - min) * Math.random() + min);
    }
    return arr;
}
let scale = Math.pow(10,8)
let d = randomArray(scale,0,scale)
sortTest(d,heapSort)
