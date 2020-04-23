class MyMap {
    constructor(arr) {
        this.ele = []
        this.size = 0
        this.init(arr)
    }
    init (arr) {
        if (Array.isArray(arr)) {
            let num = 0
            let flag = true
            for (const val of arr) {
                if (!Array.isArray(val) || val.length !== 2) {
                    flag = false
                    break
                }
                num++
            }
            if (flag) {
                this.ele = arr
                this.size = num
            }
        }
    }
    get(key){
        let keyStr = String(key)
        let res = null
        this.ele.forEach((val) => {
            let valStr = String(val[0])
            if(valStr === keyStr) {
                // return val[1]
                res = val[1]
            }
        })
        return res
    }
    set(key, newVal){
        let flag = true
        this.ele.forEach((val, idx) => {
            if(val[0] === key) {
                this.ele[idx][1] = newVal
                flag = false
            }
        })
        if(flag){
            this.ele.push([key, newVal])
        }

    }
}
// let key = 'haha'
// let arr = [[1, 2], [function () { console.log('a')}, 'aaa'], [key, 3]]
// let myMap = new MyMap(arr)
// console.log(myMap.ele)
// console.log(myMap.size)
// console.log(myMap.get('haha'))
// console.log(myMap.get(key))
// console.log(myMap.get(function () { console.log('a')}))
// myMap.set(1, 22)
// myMap.set(9, 10)
// console.log(myMap.ele)
let map = new MyMap();
// let map = new Map();
function init() {
    let t1 = Date.now()
    for (let i = 0; i < 100000; i++) {
        map.set(i,i+1)
    }
    let t2 = Date.now()
    console.log(t2-t1)
}
function test() {
    let t1 = Date.now()
    for (let i = 0; i < 10000; i++) {
        map.get(2)
    }
    let t2 = Date.now()
    console.log(t2-t1)
}

init()
test()