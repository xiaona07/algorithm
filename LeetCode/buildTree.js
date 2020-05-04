  // Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null
    }
    let top = preorder[0]
    let root = new TreeNode(top)
    let index = inorder.indexOf(top)
    let lefIno = inorder.slice(0, index)
    let rigIno = inorder.slice(index+1)
    let lefPre = preorder.slice(1, lefIno.length + 1)
    let rigPre = preorder.slice(lefIno.length + 1)
    root.left = buildTree(lefPre, lefIno)
    root.right = buildTree(rigPre, rigIno)
    return root
};
let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]
  console.log(buildTree(preorder, inorder))