/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let { arr } = this
    let len = arr.length
    if (!len) {
        arr.push(num)
        return
    }
    let i = 0, j = len - 1, mid
    while (i <= j) {
        if (num <= arr[i]) {
            arr.splice(i, 0 , num)
            return
        }
        if (num >= arr[j]) {
            arr.splice(j + 1, 0 , num)
            return
        }
        mid = Math.floor((j + i) / 2)
        if (num === arr[mid]) {
            arr.splice(mid, 0, num)
            return
        }
        if (num > arr[mid]) {
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let { arr } = this
    let len = arr.length
    if (!len) {
        return null
    }
    let mid = Math.floor((len - 1) / 2)
    if (len & 1 === 1) {
        return arr[mid]
    }
    return (arr[mid] + arr[mid + 1]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */