import {Node, LinkedTable} from '../linkedTable/linkedTable.js'

class LinkedListStack {
    constructor() {
        let head = new Node(null)
        let rear = new Node(null)
        this.elements = new LinkedTable(head, rear)
        // this.size = 0
    }

    push(ele) {
        this.elements.add(ele)
    }

    pop() {
        return this.isEmpty() ? null : this.elements.deleteFirst().ele
    }

    top() {
        return this.isEmpty() ? null : this.elements.firstEle().ele
    }

    size() {
        return this.elements.length()
    }

    isEmpty() {
        return this.size() === 0
    }
}

function test() {
    let stack = new LinkedListStack()
    // stack.push(1)
    // stack.push(2)
    // stack.push(3)
    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.isEmpty())
}

// arrayMatchBrackets()

/**
 * 检查括号是否匹配
 * @param str 表达式 {[3*(1+2)[{}()]]} ->true   {{3*(1+2)[{}()]]} ->false
 * @returns {boolean}
 */
function matchBrackets(str) {
    let matchMap = new Map([['{', '}'], ['}', '1'], ['[', ']'], [']', '1'], ['(', ')'], [')', '1']])
    let stack = new LinkedListStack()
    for (const i in str) {
        let val = str[i]
        if (matchMap.get(val)) {
            let top = stack.top();
            if (top) {
                let matchStr = matchMap.get(top);
                if (matchStr === '1') {
                    return false
                }
                if (matchStr === val) {
                    stack.pop();
                } else {
                    stack.push(val)
                }
            } else {
                stack.push(val)
            }
        }
    }
    return stack.isEmpty()
}
console.log(matchBrackets('([]])'))