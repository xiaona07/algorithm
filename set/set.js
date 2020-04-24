class MySet {
    constructor() {
        this.ele = {}
        this.length = 0
    }
    has (val) {
        return this.ele.hasOwnProperty(val)
    }
    add (val) {
        if (!this.has(val)){
            this.ele[val] = null
            this.length++
            return true
        }
        return false
    }
    remove(val){
        if(this.has(val)){
            delete this.ele[val]
            this.length--;
            return true;
        }
        return false;
    }
    clear () {
        this.ele = {}
        this.length = 0
        return true
    }
    size () {
        return length
    }
    print () {
        return Object.keys(this.ele)
    }
}
let mySet = new MySet()
mySet.add(1)
mySet.add(2)
mySet.add(2)
mySet.add(3)
mySet.remove(3)
mySet.add(function () {
    console.log('haha')
})
console.log(mySet.print())
