/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = []
    let find = function (root, sum, arr) {
        if (!root) {
            return
        }
        let arrCopy = arr.slice(0)
        arrCopy.push(root.val);
        sum -= root.val
        if (sum === 0 && !root.left && !root.right) {
            res.push(arrCopy)
            return
        }
        find(root.left, sum, arrCopy)
        find(root.right, sum, arrCopy)
    }
    find(root, sum, [])
    return res
};

var pathSum = function (root, sum) {
    let allPath = []
    let path = []
    let dfs = function(root, sum) {
        if(!root) return
        path.push(root.val)
        sum -= root.val
        if (sum === 0 && !root.left && !root.right) {
            allPath.push(path.slice(0))
        }
        dfs(root.left, sum)
        dfs(root.right, sum)
        path.pop()
    }
    dfs(root,sum)
    return allPath
};