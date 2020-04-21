class Queue {
    constructor(...args) {
        this.element = [...args]
    }
    push (ele) {
        this.element.unshift(ele)
    }
    pop () {
        this.element.pop()
    }
    size() {
        this.element.length
    }
}
let queue = new Queue(1, 2, 3)
console.log(queue)
queue.push(4)
console.log(queue)
queue.pop()
console.log(queue)

let queue1 = new Queue()
console.log(queue1)

