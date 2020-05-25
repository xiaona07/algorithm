/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var mirrorTree = function (root) {
    if (!root) {
        return root
    }
    let deal = function (root) {
        if (!root.left && !root.right) {
            return true
        }
        if (!root.left) {
            root.left = root.right
            root.right = null
            return deal(root.left)
        }
        if (!root.right) {
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

var isSymmetric = function (root) {
    if (!root || (!root.left && !root.right)) {
        return true
    }
    if (!root.left || !root.right) {
        return false
    }
    let copy = new TreeNode(root.val)
    let copyall = function (root, copy) {
        if (!root.left && !root.right) {
            return true
        }
        if (root.left && !root.right) {
            copy.left = new TreeNode(root.left.val)
            return copyall(root.left, copy.left)
        }
        if (!root.left && root.right) {
            copy.right = new TreeNode(root.right.val)
            return copyall(root.right, copy.right)
        }
        copy.left = new TreeNode(root.left.val)
        copy.right = new TreeNode(root.right.val)
        return copyall(root.left, copy.left) && copyall(root.right, copy.right)
    };
    copyall(root, copy)
    // let copy = new TreeNode(root.val)
    // copy.left = root.left
    // copy.right = root.right
    mirrorTree(copy)
    // console.log(root)
    // console.log(copy)
    let check = function (root, copy) {
        if (!root && !copy) {
            return true
        }
        if (!root || !copy) {
            return false
        }

        if (!root.left && copy.left) {
            return false
        }
        if (root.left && !copy.left) {
            return false
        }
        if (!root.right && copy.right) {
            return false;
        }
        if (root.right && !copy.right) {
            return false
        }
        if ((root.left && root.left.val !== copy.left.val) || (root.right && root.right.val !== copy.right.val)) {
            return false;
        }
        return check(root.left, copy.left) && check(root.right, copy.right)
    }
    return check(root, copy)
};


// let a = new TreeNode(1)
// let b = new TreeNode(2)
// let c = new TreeNode(2)
// let d = new TreeNode(3)
// let e = new TreeNode(3)
// a.left = b
// a.right = c
// b.right = d
// c.right = e
// console.log(isSymmetric(a))