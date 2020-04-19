class Node {
    constructor(ele) {
        this.ele = ele
        this.next = null
    }
}
class LinkedTable {
    constructor(head, rear) {
        this.head = head
        this.rear = rear
    }

    static convert(arr) {
        let head = new Node(null)
        let rear = new Node(null)
        let node0 = new Node(arr[0])
        head.next = node0
        let temp = node0
        for (let i = 1; i < arr.length; i++) {
            let node = new Node(arr[i])
            if (i === arr.length-1) {
                rear.next = node
            }
            temp.next = node
            temp = node
        }
        return new LinkedTable(head, rear)
    }
    add (node) {
        if (!this.rear.next) {
            this.rear.next = node
        }
        node.next = this.head.next
        this.head.next = node
    }
    print(){
        let temp = this.head
        let str = ''
        while (temp) {
            str += temp.ele+' '
            temp=temp.next
        }
        return str
    }
    delete (ele) {
        let temp = this.head
        while (temp.next) {
            let node = temp.next
            if (node.ele === ele) {
                temp.next = temp.next.next
                node.next = null
            } else {
                temp = node
            }
        }
    }
}
function test() {
    let linkedTable = LinkedTable.convert([1,2,3,3,2,3,4,3])
    console.log(linkedTable.print())
    let node = new Node(3)
    linkedTable.add(node)
    console.log(linkedTable.print())
    linkedTable.delete(3)
    console.log(linkedTable.print())
}
test()
