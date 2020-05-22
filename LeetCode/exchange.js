/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let len = nums.length
    let arr = new Array(len)
    let a = 0, b = len - 1
    for (let i = 0; i < len; i++) {
        if ((nums[i] & 1) === 1) {
            arr[a] = nums[i]
            a++
        } else {
            arr[b] = nums[i]
            b--
        }
    }
    return arr
};
var exchange2 = function (nums) {
    let a = 0, b = nums.length - 1
    while (a < b) {
        let f1 = (nums[a] & 1) === 1
        let f2 = (nums[b] & 1) === 1
        if (f1 && f2) {
            a++
        } else if (!f1 && f2) {
            let temp = nums[a]
            nums[a] = nums[b]
            nums[b] = temp
            a++
            b--
        } else if (!f1 && !f2) {
            b--
        } else {
            a++
            b--
        }
    }
    return nums
};


var exchange3 = function (nums) {
    let len = nums.length;
    let l = 0, r = len - 1
    while (l < r) {
        if (nums[l] % 2 === 0 && nums[r] % 2 !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
        }
        while (l < len && nums[l] % 2 !== 0) {
            l++;
        }
        while (r > 0 && nums[r] % 2 === 0) {
            r--;
        }
    }
    return nums
};

var exchange4 = function (nums) {
    let len = nums.length;
    // let p = 0
    let l = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] % 2 === 0) {
            l = i
            break
        }
    }
    for (let i = l+1; i < len; i++) {
        if (nums[i] % 2 !== 0 && nums[l] % 2 === 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]]
            l++
        }
    }
    return nums
};
var exchange5 = function (nums) {
    let len = nums.length;
    let l = len - 1
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] % 2 === 1) {
            l = i
            break
        }
    }
    for (let i = l - 1; i >= 0; i--) {
        if (nums[i] % 2 !== 1 && nums[l] % 2 === 1) {
            [nums[i], nums[l]] = [nums[l], nums[i]]
            l--
        }
    }
    return nums
};

console.log(exchange4([2,16,3,5,13,1,16,1,12,18,11,8,11,11,5,1]))