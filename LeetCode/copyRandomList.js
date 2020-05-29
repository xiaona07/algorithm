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
