class Stack {
    constructor() {
        this.elements = []
        // this.size = 0
    }

    pop() {
        return this.elements.pop()
    }

    top() {
        return this.elements[this.elements.length - 1]
    }

    push(ele) {
        this.elements.push(ele)
    }

    size() {
        return this.elements.length
    }

    isEmpty() {
        return this.elements.length === 0
    }
}

function test() {
    let stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    console.log(stack.top())
    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.isEmpty())
}

test()