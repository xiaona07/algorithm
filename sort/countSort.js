var countSort = function(arr,scale) {
    let len = arr.length
    if (len === 0) {
        return [];
    }
    // 统计每个数字出现的次数
    let counter = new Array(scale+1).fill(0);
    for (let num of arr) {
        counter[num]++;
    }
    // 根据counter数组从头找出k个数作为返回结果
    let res = new Array(arr.length);
    let idx = 0;
    for (let num = 0; num < counter.length; num++) {
        while (counter[num]-- > 0 && idx < len) {
            res[idx++] = num;
        }
    }
    return res;
}

console.log(countSort([9,8,7,3,4,5],10))
