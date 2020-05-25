/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var mirrorTree = function(root) {
    if (!root) {
        return root
    }
    let deal = function (root) {
        if (!root.left && !root.right) {
            return true
        }
        if(!root.left){
            root.left = root.right
            root.right = null
            return deal(root.left)
        }
        if(!root.right){
            root.right = root.left
            root.left = null
            return deal(root.right)
        }
        let save = root.left;
        root.left = root.right
        root.right = save
        return deal(root.left) && deal(root.right)
    }
    deal(root)
    return root
};






function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let a = new TreeNode(1)
let b = new TreeNode(3)
let c = new TreeNode(6)
let d = new TreeNode(9)
let e = new TreeNode(2)
let f = new TreeNode(7)
let g = new TreeNode(4)
e.left = a
e.right = b
f.left = c
f.right = d
g.left = e
g.right = f
// console.log(g)

console.log(mirrorTree(g))