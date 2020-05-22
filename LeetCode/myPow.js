/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1
    for (let i = 0; i < Math.abs(n); i++) {
        res *= x
    }
    if (n >= 0) {
        return res
    }
    return 1 / res
};
var myPow2 = function(x, n) {
    if(x === 0) return 0;
    let b = n;
    let res = 1;
    if(b < 0) {
        x = 1 / x;
        b = -b;
    }
    while(b > 0) {
        if((b & 1) === 1) res *= x;
        x *= x;
        b >>>= 1;
    }
    return res;
}
