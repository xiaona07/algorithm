class Node {
    constructor(ele) {
        this.ele = ele
        this.next = null
    }
}
class LinkedQueue {
    constructor() {
        this.head = new Node(null)
        this.rear = new Node(null)
        this.size = 0
    }
    push (ele) {
        let node = new Node(ele)
        if (!this.rear.next) {
            this.rear.next = node
            this.head.next = node
        } else {
            this.rear.next.next = node
            this.rear.next = node
        }
        this.size++
    }
    pop () {
        let pop = this.head.next
        if(!pop){
            return null
        }
        this.head.next = pop.next
        pop.next = null
        this.size--
    }
    print () {
        let temp = this.head.next
        let str = ''
        while (temp) {
            str += temp.ele + ' '
            temp = temp.next
        }
        return str
    }
    length() {
        return this.size
    }
}

let queue = new LinkedQueue()
console.log(queue)
queue.push(4)
queue.push(5)
console.log(queue.print())
queue.pop()
console.log(queue.print())
