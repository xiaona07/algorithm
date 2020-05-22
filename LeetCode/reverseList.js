/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next){
        return head
    }
    let temp = head
    head = head.next
    temp.next = null
    let another
    while(head.next){
        another = head.next
        head.next = temp
        temp = head
        head = another
    }
    head.next = temp
    return head
};
