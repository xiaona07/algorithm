/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let arr = [root]
    let res = []
    while (arr.length > 0) {
        let temp = arr.shift();
        res.push(temp.val)
        temp.left && arr.push(temp.left)
        temp.right && arr.push(temp.right)
    }
    return res
};