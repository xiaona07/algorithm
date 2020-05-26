/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//递归写法
var isMatch1 = function(s, p) {
    if(s && !p){
        return false
    }
    if(!s && !p){
        return true;
    }
    if (!s && p) {
        if (p.length % 2 === 0) {
            let i = 1
            while(i < p.length){
                if (p[i] !== '*') {
                    return false
                }
                i += 2
            }
            return true
        }
        return false
    }
    if(p[1] === '*') {
        if (s[0] === p[0] || p[0] === '.') {
            return isMatch(s.slice(1), p.slice(2)) || isMatch(s.slice(1), p) || isMatch(s, p.slice(2))
        }
        return isMatch(s, p.slice(2))
    }
    if(s[0] === p[0] || p[0] === '.'){
        return isMatch(s.slice(1), p.slice(1));
    }
    return false
};
//动态规划
var isMatch = function(s, p) {
    let sLen = s.length
    let pLen = p.length
    //将p横向，s纵向写出arr
    let arr = new Array(sLen + 1);
    for (let i = 0; i <= sLen; i++) {
        arr[i] = new Array(pLen + 1);
    }
    arr[0][0] = true;
    //arr的第一行初始化：遇到有*的参考它同行的前二个。也就是如果p的第二位是*那么初始化的第一行遇到*都是true，如果p的第二位不是*那么初始化的第一行全部是false
    for (let i = 1; i <= pLen; i++){
        if (p[i-1] === '*' && arr[0][i-2]) {
            arr[0][i] = true;
        }else {
            arr[0][i] = false;
        }
    }
    //arr的每一行的第一个都是false
    for (let i = 1; i <= sLen; i++){
        arr[i][0] = false;
    }
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] !== '*') {
                if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.')) {
                    //不是*的时候看左上方
                    arr[i][j] = arr[i - 1][j - 1];
                }
            }else {
                //遇到*
                //一开始默认此*和其前面字符彻底不参与s的匹配
                if (j >= 2) {
                    arr[i][j] = arr[i][j - 2];
                }
                //如果参与匹配，参考当前s前面的字符和*前二个或者*是否匹配上了，s前面的字符和*前二个即arr[i - 1][j - 2]，s前面与*即arr[i - 1][j]
                if (i >= 1 && j >= 2 && (s[i - 1] === p[j - 2] || p[j - 2] === '.')) {
                    if(!arr[i][j]){
                        arr[i][j] = arr[i - 1][j];
                    }
                }
            }
        }
    }
    console.log(arr)
    if(arr[sLen][pLen]){
        return arr[sLen][pLen]
    }
    return false
};
console.log(isMatch('aa', 'a*'))