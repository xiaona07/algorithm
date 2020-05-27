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
//按层打印成为一维数组
var levelOrder1 = function(root) {
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
//按层打印成为二维数组
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder2 = function(root) {
    if(!root){
        return []
    }
    let stack = [root]
    let stack1
    let res = [[root.val]]
    let res1
    while (stack.length > 0) {
        stack1 = []
        res1 = []
        while (stack.length > 0) {
            let temp = stack.shift();
            if (temp.left) {
                stack1.push(temp.left)
                //0也是false
                if (temp.left.val !== null) {
                    res1.push(temp.left.val)
                }
            }
            if (temp.right) {
                stack1.push(temp.right)
                if (temp.right.val !== null) {
                    res1.push(temp.right.val)
                }
            }
        }
        if (res1.length > 0) {
            res.push(res1);
        }
        if (stack1.length > 0) {
            stack = stack1
        }
    }
    return res
};

//按层之字形打印成为二维数组
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder3 = function(root) {
    if(!root){
        return []
    }
    let stack = [root]
    let stack1
    let res = [[root.val]]
    let res1
    let flag = 1
    while (stack.length > 0) {
        stack1 = []
        res1 = []
        while (stack.length > 0) {
            let temp = stack.shift();
            if (temp.left) {
                stack1.push(temp.left)
                //0也是false
                if (temp.left.val !== null) {
                    res1.push(temp.left.val)
                }
            }
            if (temp.right) {
                stack1.push(temp.right)
                if (temp.right.val !== null) {
                    res1.push(temp.right.val)
                }
            }
        }
        if (res1.length > 0) {
            if (flag++ & 1 === 1) {
                res1.reverse()
            }
            res.push(res1);
        }
        if (stack1.length > 0) {
            stack = stack1
        }
    }
    return res
};