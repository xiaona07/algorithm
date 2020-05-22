/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let num = 0, a = 0
    while (n > 0) {
        a = n % 2
        num += a
        if (a === 1) {
            n = (n -1) / 2
        }else {
            n = n / 2
        }
    }
    return num
};
var hammingWeight1 = function(n) {
    let num = 0
    while (n > 0) {
        num += n % 2
        // if (（n % 2） === 1) {
        //     n = (n -1) / 2
        // }else {
        //     n = n / 2
        // }
        n = Math.floor(n / 2)
    }
    return num
};
var hammingWeight2 = function(n) {
    let num = 0
    while (n > 0) {
        num += (n & 1)
        n >>>= 1
    }
    return num
};
var hammingWeight3 = function(n) {
    let num = 0
    while (n !== 0) {
        num ++
        n &= n-1
    }
    return num
};
let a = 0b11111111111111111111111111111101
// console.log(a)
// console.log(hammingWeight3(a))
let t1 = new Date().getTime()
for (let i = 0; i < 100; i++) {
    hammingWeight3(a)
}
let t2 = new Date().getTime()
console.log(t2 - t1)