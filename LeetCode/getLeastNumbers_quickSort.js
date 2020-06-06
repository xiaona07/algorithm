
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

var getLeastNumbers = function(arr, k) {
    var quickSort = function (arr, l, r) {
        let len = r - l
        if (len > 1) {
            let p = partition(arr, l, r)
            if(p===k) return arr.slice(0,k)
            if(p>k){
                quickSort(arr, l, p)
            }else{
                quickSort(arr, p + 1, r);
            }
        }
        return arr
    };
    return quickSort(arr,0,arr.length).slice(0,k)
};

console.log(getLeastNumbers([0,1,2,3,4,0,3,3,8,1,4,6,2,8,8,15,10,0,9,9,1,2,17,8,17,25,18,18,16,13,18,29,2,3,32,2,26,23,18,8,34,8,11,36,36,39,46,30,21,25,21,14,41,10,31,55,45,16,33,47,4,52,59,60,1,43,42,10,12,56,12,27,22,52,38,12,41,42,71,5,42,76,8,3,31,65,11,29,28,68,33,50,73,87,22,68,31,1,38,89]
,60))
