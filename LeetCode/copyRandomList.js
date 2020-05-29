/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    function Node(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    };
    let empty = new Node(null, null, null)
    let map = new Map()
    let mapIdx = 0
    let arr = []
    let temp = head
    let tempC = empty
    while (temp) {
        map.set(temp, mapIdx++)
        let now = new Node(temp.val, null, null)
        arr.push(now)
        tempC.next = now
        temp = temp.next
        tempC = tempC.next
    }
    for (let [key, value] of map) {
        arr[value].random = arr[map.get(key.random)]
    }
    return empty.next
};
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * 深度优先遍历复制
 * @param {Node} head
 * @returns {null|Node}
 */
var copyRandomList = function (head) {
    let visited = new Map()
    let dfs = function (head) {
        if(!head) return null
        if(visited.get(head)) return visited.get(head)
        let copy = new Node(head.val,null,null)
        visited.set(head,copy)
        copy.next=dfs(head.next)
        copy.random=dfs(head.random)
        return copy
    }
    return dfs(head)
}

/**
 * 广度优先遍历复制
 * @param {Node} head
 * @returns {null|Node}
 */
var copyRandomList = function (head) {
    let visited = new Map()
    let bfs = function (head) {
        if(!head) return null
        let copy = new Node(head.val,null,null)
        let queue = []
        queue.push(head)
        visited.set(head,copy)
        while (queue.length) {
            let node = queue.shift()
            if (node.next && !visited.get(node.next)) {
                visited.set(node.next,new Node(node.next.val, null, null))
                if(node.next) queue.push(node.next)
            }
            if (node.random && !visited[node.random]) {
                visited.set(node.random,new Node(node.random.val, null, null))
                if(node.random) queue.push(node.random)
            }
            visited.get(node).next=visited.get(node.next)
            visited.get(node).random=visited.get(node.random)

        }
        return copy
    }
    return bfs(head)
}
/**
 * 直接遍历
 * @param {Node} head
 * @returns {null|Node}
 */
var copyRandomList = function (head) {
    let visited = new Map()
    let getClonedNode = function (node) {
        if(!node) return null
        if(visited.get(node)) return visited.get(node)
        visited.set(node,new Node(node.val,null,null))
        return visited.get(node)
    };
    if(!head) return head
    let oldNode = head
    let newNode = new Node(oldNode.val,null,null)
    visited.set(oldNode,newNode)
    while (oldNode) {
        newNode.next=getClonedNode(oldNode.next)
        newNode.random=getClonedNode(oldNode.random)
        oldNode=oldNode.next
        newNode=newNode.next
    }
    return visited.get(head)
}
/**
 * 优化遍历
 * @param {Node} head
 * @returns {null|Node}
 */
var copyRandomList = function (head) {
    if(!head) return head
    let cur = head
    while (cur) {
        let newNode = new Node(cur.val,null,null)
        newNode.next=cur.next
        cur.next = newNode
        cur = newNode.next
    }
    cur = head
    while (cur) {
        cur.next.random = cur.random?cur.random.next:null
        cur = cur.next.next
    }
    let curOld = head
    let curNew = head.next
    let newHead = head.next
    while (curOld) {
        curOld.next = curOld.next.next
        curNew.next = curNew.next?curNew.next.next:null
        curOld=curOld.next
        curNew=curNew.next
    }
    return newHead
}
