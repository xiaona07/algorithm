/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    let dfs = function (s) {
        if(!s || s.length===1) return s
        if (s.length === 2) return [s,s[1]+s[0]]
        let res = []
        for (let i = 0; i < s.length; i++) {
            let subRes = dfs(s.slice(0,i)+s.slice(i+1,s.length))
            for (let index in subRes) {
                res.push(s[i]+subRes[index])
            }
        }
        return res
    }
    return Array.from(new Set(dfs(s)))
};

var permutation = function (s) {
    let dfs = function (s) {
        if(!s || s.length===1) return s
        if (s.length === 2) return new Set([s,s[1]+s[0]])
        let res = new Set()
        for (let i = 0; i < s.length; i++) {
            let subRes = dfs(s.slice(0,i)+s.slice(i+1,s.length))
            for (let e of subRes) {
                res.add(s[i]+e)
            }
        }
        return res
    }
    return Array.from(dfs(s))
};

console.log(permutation("aab"))

