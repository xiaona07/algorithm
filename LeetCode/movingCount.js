/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0
    let map = new Map()
    let dfs = function (m, n, i, j, k) {
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return
        }
        let num = i % 10 + Math.floor(i / 10) +  j % 10 + Math.floor(j / 10)
        if (k < num) {
            return
        }
        let arr = map.get(i)
        if (arr && arr.indexOf(j) !== -1) {
            return
        }
        count++
        if (arr) {
            arr.push(j)
            map.set(i, arr)
        }else {
            map.set(i, [j])
        }
        let res = (dfs(m, n, i - 1, j, k) ||
            dfs(m, n, i + 1, j, k ) ||
            dfs(m, n, i, j - 1, k ) ||
            dfs(m, n, i, j + 1, k));
        return res
    }
    dfs(m, n, 0, 0, k)
    return count
};
console.log(movingCount(1, 2, 1))