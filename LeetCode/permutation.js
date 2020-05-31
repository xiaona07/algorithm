/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    // let dfs=function (s) {
        if(!s || s.length===1) return [s]
        if(s.length===2) return [...new Set([s,s[1]+s[0]])]
        let res = new Set()
        for (let i = 0; i < s.length; i++) {
            let subRes = permutation(s.slice(0,i)+s.slice(i+1))
            for (let val of subRes) {
                res.add(s[i]+val)
            }
        }
        return [...res]
        // return res
    // }
    // return [...dfs(s)]
};

console.log(permutation("aac"))