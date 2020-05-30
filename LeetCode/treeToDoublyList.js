/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    let pre = null, head = null;
    let dfs = function (cur) {
        if(cur == null) return;
        dfs(cur.left);
        if(pre != null) pre.right = cur;
        else head = cur;
        cur.left = pre;
        pre = cur;
        dfs(cur.right);
    }
    if(root == null) return null;
    dfs(root);
    head.left = pre;
    pre.right = head;
    return head;

};
var treeToDoublyList = function(root) {
    if (!root) return null
    let left = root, right = root
    while (left.left) {
        left = left.left
    }
    while (right.right) {
        right = right.right
    }
    let find = function (root) {
        if (!root || (!root.left && !root.right)) return true
        let rl = root.left, rr = root.right
        let leftMax = rl, rightMin = rr
        if (leftMax) {
            while (leftMax.right) {
                leftMax = leftMax.right;
            }
            leftMax.right = root
            root.left = null
        }
        if (rightMin) {
            while (rightMin.left) {
                rightMin = rightMin.left;
            }
            root.left = null
            root.right = rightMin
        }
        return find(rl) && find(rr)
    }
    find(root)
    right.right = left
    left.left = right
   let temp = left
    while (temp !== right) {
        temp.right.left = temp
        temp = temp.right
    }
    return left
};
function Node(val,left,right) {
   this.val = val;
   this.left = left;
   this.right = right;
};
function constructBiTree(font, middle) {
    if (!font.length || !middle.length) {
        return null
    }
    let root = new Node(font[0], null, null)
    let rootMidIndex = middle.indexOf(font[0])

    let midLeft = middle.slice(0, rootMidIndex)
    let fonLeft = font.slice(1, midLeft.length + 1)
    root.left = constructBiTree(fonLeft, midLeft)

    let midRight = middle.slice(rootMidIndex + 1)
    let fonRight = font.slice(font.length - midRight.length)
    root.right = constructBiTree(fonRight, midRight)
    return root
}
let font = [3, 1, 2, 5, 4, 6]
let middle = [1, 2, 3, 4, 5, 6]
let root = constructBiTree(font, middle)
// console.log(root)
console.log(treeToDoublyList2(root))


