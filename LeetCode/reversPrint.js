
 // Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr = []
    let p = head
    while (p) {
        arr.unshift(p.val)
        p = p.next
    }
   return arr
};