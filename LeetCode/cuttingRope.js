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
console.log(cuttingRope2(9))