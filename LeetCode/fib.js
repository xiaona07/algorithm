/**
 * @param {number} n
 * @return {number}
 */
// 递归
var fib1 = function(n) {
    if (n === 1){
        return 1
    }
    if (n === 0) {
        return 0
    }
    return fib1(n - 1) + fib2(n - 2)
}
var fib2 = function(n) {
    const mod = 1e9+7
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr.push((arr[i - 1] + arr[i - 2]) % mod )
    }
    return arr[n]
}
var fib3 = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let a = 0n,
        b = 1n;
    for (let i = 2n; i < n; ++i) {
        let c = a + b;
        a = b;
        b = c;
    }
    return (a + b) % 1000000007n;
};
//带备忘录的递归
var fib4 = function(n) {
    const cache = {
        0: 0n,
        1: 1n
    };
    return Fibonacci(n) % 1000000007n;
    function Fibonacci(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }
        cache[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
        return cache[n];
    }
};


console.log(fib2(50000))


