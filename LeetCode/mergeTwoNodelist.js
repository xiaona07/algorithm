/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let res = new ListNode(null)
    let head = res
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            res.next = l1
            res = res.next
            l1 = l1.next
        } else {
            res.next = l2
            res = res.next
            l2 = l2.next
        }
    }
    (l1 || l2) ? res.next = l1 || l2 : res.next = null
    return head.next
};


var mergeTwoLists2 = function (l1, l2) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    let dummyHead = new ListNode(-1)
    let curr = dummyHead
    while (l1 != null || l2 != null) {
        if (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                curr.next = l1
                curr = l1
                l1 = l1.next
            } else {
                curr.next = l2
                curr = l2
                l2 = l2.next
            }
        } else if (l1 != null) {
            curr.next = l1
            break
        } else {
            curr.next = l2
            break
        }
    }
    return dummyHead.next
}
