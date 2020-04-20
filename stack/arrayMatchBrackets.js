function arrayMatchBrackets(str) {
    if (!str.length) {
        return '空'
    }
    let arr = str.split("")
    let arr1 = []
    for (const val of arr){
        if (val === '{' || val === '}' || val === '[' || val === ']' || val === '(' || val === ')' ) {
            if (arr1.length === 0) {
                arr1.push(val)
            } else {
                let index = arr1.length - 1
                let value = arr1[index]
                if ((value === '{' && val === '}') || (value === '[' && val === ']') ||(value === '(' && val === ')')) {
                    arr1.splice(index, 1)
                } else {
                    arr1.push(val)
                }
            }
        }
    }
    return arr1.length === 0
}
console.log(arrayMatchBrackets('{1*[3+2]+9/(1+2)}'))