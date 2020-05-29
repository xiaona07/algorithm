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
    let visited = {}
    let dfs = function (head) {
        if(!head) return null
        if(visited[head]) return visited[head]
        let copy = new Node(head.val,null,null)
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
    let visited = {}
    let bfs = function (head) {
        if(!head) return null
        let copy = new Node(head.val,null,null)
        let queue = []
        queue.push(head)
        visited[head]=copy
        while (queue.length) {
            let node = queue.shift()
            if (node.next && !visited[node.next]) {
                visited[node.next] = new Node(node.next.val, null, null)
                queue.push(node.next)
            }
            if (node.random && !visited[node.random]) {
                visited[node.random] = new Node(node.random.val, null, null)
                queue.push(node.random)
            }
            visited[node].next = visited[node.next]
            visited[node].random = visited[node.random]
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
    let getClonedNode = function (node) {
        if(!node) return null
        if(visited[node]) return visited[node]
        visited[node] = new Node(node.val,null,null)
        return visited[node]
    };
    if(!head) return head
    let visited = {}
    let oldNode = head
    let newNode = new Node(oldNode.val,null,null)
    visited[oldNode]=newNode
    while (oldNode) {
        newNode.next=getClonedNode(oldNode.next)
        newNode.random=getClonedNode(oldNode.random)
        oldNode=oldNode.next
        newNode=newNode.next
    }
    return visited[head]
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
