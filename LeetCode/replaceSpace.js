/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    // return s.replace(/ /g, "%20");
    let len = s.length
    for(const val of s) {
        if (val === ' ') {
            len += 2
        }
    }
    let arr = new Array(len)
    for(const val of s) {
        if (val === ' '){
            arr.push('%20')
        } else {
            arr.push(val)
        }
    }
    return arr.join("")
};
let s = "We are happy."
console.log(replaceSpace(s))