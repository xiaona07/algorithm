/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(head.val === val){
        head = head.next || null
        return head
    }
    // if(head.next === null){
    //     return null
    // }
    let temp = head
    while (temp.next) {
        if(temp.next.val === val){
            temp.next = temp.next.next || null;
            return head
        }
        temp = temp.next
    }
    return null
};

var deleteNode2 = function(head, val) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let dummy = new ListNode(null)
    dummy.next = head
    let temp = dummy
    while (temp.next) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
            return dummy.next
        }
        temp = temp.next
    }
    return dummy.next
}