/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let res = head
    let temp = head
    let num = 1
    while(num < k){
        temp = temp.next;
        num++
    }
    while(temp.next){
            res = res.next
            temp = temp.next;
    }
    return res
};