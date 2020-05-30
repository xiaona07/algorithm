class MyMap {
  constructor(arr) {
    this.ele = []
    this.size = 0
    this.init()
  }
  init(arr) {
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
    get(key){
      this.ele.forEach((val) => {
        if (val[0] === key) { }
        return val[1]
      })
    }
    set(key, newVal){
        this.ele.forEach((val, idx) => {
            if(val[0] === key) {
                this.ele[idx][1] = newVal
            }
        })
    }
  }
let key = 'haha'
let arr = [[1, 2], [function () { console.log('a') }, 'aaa'], [key, 3]]
let myMap = new MyMap(arr)
console.log(myMap.ele)
console.log(myMap.size)
console.log(myMap.get(key))
console.log(myMap.get('haha'))
console.log(myMap.set(1, 22))
console.log(myMap.ele)