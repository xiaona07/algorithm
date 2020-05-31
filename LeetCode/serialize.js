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
var serialize = function(root) {
    if (!root) {
        return "[]"
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
            if (!temp) {
                stack1.push(null);
                res1.push(null);
                stack1.push(null)
                res1.push(null)
            } else {
                if(temp.left){
                    stack1.push(temp.left);
                    res1.push(temp.left.val);
                }else {
                    stack1.push(null);
                    res1.push(null);
                }
                if(temp.right){
                    stack1.push(temp.right)
                    res1.push(temp.right.val)
                }else {
                    stack1.push(null)
                    res1.push(null)
                }
            }

        }
        let result1 = res1.every((val) => {
            return val === null
        })
        if (result1) {
            break
        }else {
            res.push(res1)
        }
        let result2 = stack1.every((val) => {
            return val === null
        })
        if (result2) {
            break
        }else {
            stack = stack1
        }
    }
    let arr = []
    for (let i = 0; i < res.length; i++) {
        arr = arr.concat(res[i])
    }
    return JSON.stringify(arr);
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
var deserialize = function(data) {
    let arr = JSON.parse(data);
    console.log(arr)
    if (arr.length <= 0) {
        return null
    }
    let head = new TreeNode(arr[0])
    let queue = [head]
    let idx = 1
    while (idx < arr.length) {
        let now = queue.shift()
        if (now == null) {
            idx += 2
            queue.push(null)
            queue.push(null)
        }else{
            let left, right;
            if(arr[idx] === null){
                left = null
                idx++
            }else {
                left = new TreeNode(arr[idx++])
            }
            if(arr[idx] === null){
                right = null
                idx++
            }else {
                right = new TreeNode(arr[idx++])
            }

            // let left = new TreeNode(arr[idx++])
            // let right = new TreeNode(arr[idx++])
            now.left = left
            now.right = right
            queue.push(left)
            queue.push(right)
        }
    }
    return head
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
