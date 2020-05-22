/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope1 = function(n) {
    if (n === 2) {
        return 1
    }
    if (n === 3){
        return 2
    }
    let fun = function (n) {
        if (n === 1) {
            return 1
        }
        if (n === 2) {
            return 2
        }
        if (n === 3) {
            return 3
        }
        let num = 0
        for (let i = 1; i < n ; i++) {
            let now = i * fun(n - i)
            if(now > num){
                num = now
            }
        }
        return num
    }
    return fun(n)
};
var cuttingRope2 = function(n) {
    let dp = new Array(n + 1).fill(1)
    for (let i = 3; i < n + 1; i++) {
        for (let j = 1; j < i ; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i-j])
        }
    }
    return dp[n]
};
var cuttingRope3 = function(n) {
    if (n === 2) {
        return 1
    }
    if (n === 3) {
        return 2
    }
    let a = Math.floor(n / 3);
    let b = n % 3
    let res = 1
    for (let i = 0; i < a ; i++) {
        res = (res * 3) % (1e9+7)
    }
    if (b === 0) {
        return res
    }
    if (b === 1) {
        return ((res / 3) * 4) % (1e9+7)
    }
    return (res * 2) % (1e9+7)
};
var cuttingRope4 = function(n) {
    if (n === 2) {
        return 1
    }
    if (n === 3) {
        return 2
    }
    if (n === 4) {
        return 4
    }
    if (n === 5) {
        return 6
    }
    if (n === 6) {
        return 9
    }
    let a = Math.floor(n / 3);
    let b = n % 3
    let res = 1
    for (let i = 1; i < a ; i++) {
        res = (res * 3) % (1e9+7)
    }
    if (b === 0) {
        return (res * 3) % (1e9+7)
    }
    if (b === 1) {
        return (res * 4) % (1e9+7)
    }
    return (res * 6) % (1e9+7)
};
console.log(cuttingRope3(127))