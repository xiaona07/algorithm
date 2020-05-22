/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    s = s.trim()
    if (s.length <= 0) {
        return false
    }
    let reg = /\d/
    if (s.length === 1 && (!reg.test(s))) {
        return false
    }
    let dotCount = 0
    let eCount = 0
    let numCount = 0
    for (let i = 0; i < s.length; i++) {
        if ((s[i] === '+' || s[i] === '-')) {
            if (i !== 0 && s[i - 1] !== 'e') {
                return false
            }
        } else if (s[i] === '.') {
            if (eCount > 0) {
                return false
            }
            dotCount++
            if (dotCount > 1) {
                return false
            }

        } else if (s[i] === 'e') {
            eCount++
            if (eCount > 1) {
                return false
            }
            if (!s[i + 1]) {
                return false
            }
            if (!reg.test(s[i + 1])) {
                if (s[i + 1] !== '+' && s[i + 1] !== '-') {
                    return false
                } else {
                    if (!s[i + 2] || !reg.test(s[i + 2])) {
                        return false
                    }
                }

            }
            if (!reg.test(s[i - 1])) {
                if (s[i - 1] === '.') {
                    if (!s[i - 2] || !reg.test(s[i - 2])) {
                        return false
                    }
                } else {
                    return false
                }
            }

        } else if (reg.test(s[i])) {
            numCount++
        } else {
            return false
        }
    }
    if (numCount < 1) {
        return false
    }
    return true
};


var isNumber2 = function (s) {
    if (!s) return false
    s=s.trim()
    let transTable = [
        [1, 3, 2, -1, -1, 0],
        [-1, 3, 2, -1, -1, -1],
        [-1, 4, -1, -1, -1, -1],
        [-1, 3, 4, 5, -1, -1],
        [-1, 8, -1, 5, -1, -1],
        [6, 7, -1, -1, -1, -1],
        [-1, 7, -1, -1, -1, -1],
        [-1, 7, -1, -1, -1, -1],
        [-1, 8, -1, 5, -1, -1]
    ]
    let legalState = [3,4,7,8]
    // let transTable = [
    //     [1,2,7,-1,-1,0],
    //     [-1,2,7,-1,-1,-1],
    //     [-1,2,3,4,-1,9],
    //     [-1,3,-1,4,-1,9],
    //     [6,5,-1,-1,-1,-1],
    //     [-1,5,-1,-1,-1,9],
    //     [-1,5,-1,-1,-1,-1],
    //     [-1,8,-1,-1,-1,-1],
    //     [-1,8,-1,4,-1,9],
    //     [-1,-1,-1,-1,-1,9]
    //     ]
    // let legalState = [2,3,5,8,9]
    let cols = {
        "sign":0,
        "number":1,
        "dot":2,
        "exp":3,
        "other":4,
        "blank":5
    }
    function getColType(c){
        if(/\d/.test(c)) return 'number'
        if(['+','-'].indexOf(c) > -1) return 'sign'
        if(c === '.') return 'dot'
        if(['E','e'].indexOf(c) > -1) return 'exp'
        if(c === ' ') return 'blank'
        return 'other'
    }
    let state = 0
    for (let i = 0; i < s.length; i++) {
        state = transTable[state][cols[getColType(s[i])]]
        if (state === -1) return false
    }
    if(legalState.indexOf(state) > -1) return true
    return false
}


console.log(isNumber2("1"))