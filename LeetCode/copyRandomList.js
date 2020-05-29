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
