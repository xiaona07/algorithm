/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!B || !A) {
        return false
    }
    let findB = function (A, B) {
        if (!B) {
            return true
        }
        if (!A) {
            return false;
        }
        if (A.val === B.val) {
            return findB(A.left, B.left) && findB(A.right, B.right)
        }
        return false
    };
    let find = function (A, B) {
        if (!B) {
            return true
        }
        if (!A) {
            return false;
        }
        if (A.val === B.val) {
            return (findB(A.left, B.left) && findB(A.right, B.right)) || find(A.left, B) || find(A.right, B)
        }
        return find(A.left, B) || find(A.right, B)
    }
    return find(A, B)
};
var isSubStructure = function (A, B) {
    if (!B || !A) {
        return false
    }
    let findB = function(A, B) {
        if (!B) return true;
        if (!A || A.val !== B.val) return false;
        return sub(A.left, B.left) && sub(A.right, B.right);
    }
    let find = function (A, B) {
        return (!!A && !!B) && (findB(A, B) || find(A.left, B) || find(A.right, B));
    }
    return find(A, B)
};

function sub(A, B) {
    if (!B) return true;
    if (!A || A.val !== B.val) return false;
    return sub(A.left, B.left) && sub(A.right, B.right);
}
var isSubStructure = function (A, B) {
    return (!!A && !!B) && (sub(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
};