/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
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
var isMatch = function(s, p) {
    let sLen = s.length
    let pLen = p.length
    let arr = new Array(sLen + 1);
    for (let i = 0; i <= sLen; i++) {
        arr[i] = new Array(pLen + 1);
    }
    arr[0][0] = true;
    for (let i = 1; i <= pLen; i++){
        arr[0][i] = true;
    }
    for (let i = 1; i <= sLen; i++){
        arr[i][0] = false;
    }
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] !== '*') {
                if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.')) {
                    arr[i][j] = arr[i - 1][j - 1];
                }
            }else {
                if (j >= 2) {
                    arr[i][j] = arr[i][j - 2];
                }
                if (i >= 1 && j >= 2 && (s[i - 1] === p[j - 2] || p[j - 2] === '.')) {
                    if(!arr[i][j]){
                        arr[i][j] = arr[i - 1][j];
                    }
                }
            }
        }
    }
    if(arr[sLen][pLen]){
        return arr[sLen][pLen]
    }
    return false
};