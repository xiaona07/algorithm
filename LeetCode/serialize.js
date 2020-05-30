/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return '[]'
    let res = '['
    let queue = []
    queue.push(root)
    while (queue.length){
        let node = queue.shift();
        if(node) {
            res +=node.val + ','
            queue.push(node.left)
            queue.push(node.right)
        } else {res+='null,'}
    }
    res = res.slice(0,res.length-1)
    res+="]"
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "[]") return null;
    let nodes = data.slice(1,data.length - 1).split(',');
    let root = new TreeNode(parseInt(nodes[0]));
    let queue = [root]
    let i = 1;
    while(queue.length) {
        let node = queue.shift();
        if(nodes[i] !== "null") {
            node.left = new TreeNode(parseInt(nodes[i]));
            queue.push(node.left);
        }
        i++;
        if(nodes[i] !== "null") {
            node.right = new TreeNode(parseInt(nodes[i]));
            queue.push(node.right);
        }
        i++;
    }
    return root;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
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
let preorder = [1,2,3,4,5]
let inorder = [2,1,4,3,5]
console.log(serialize(buildTree(preorder, inorder)))
