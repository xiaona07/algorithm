class Node {
    constructor(ele) {
        this.ele = ele
        this.left = null
        this.right = null
    }
}

// for (let i = 1; i < 8; i++) {
//     let name = 'node' + i
//     eval("var "+ name+"=new Node("+i+")")
// }
// // console.log(node1)
// node1.left = node2
// node1.right = node3
// node2.left = node4
// node2.right = node5
// node3.left = node6
// node3.right = node7

/**
 * 二叉树中序遍历
 * @param root 二叉树根指针
 */
function visit(root) {
    if (!root) {
        return
    }
    console.log(root.ele)
    visit(root.left);
    visit(root.right)
}
// visit(node1)

/**
 * 前序和中序构造二叉树
 * @param font 前序数组
 * @param middle 中序数组
 * @returns {Node|null}
 */
function constructBiTree(font, middle) {
    if (!font.length || !middle.length) {
        return null
    }
    let root = new Node(font[0])
    let rootMidIndex = middle.indexOf(font[0])

    let midLeft = middle.slice(0, rootMidIndex)
    let fonLeft = font.slice(1, midLeft.length + 1)
    root.left = constructBiTree(fonLeft, midLeft)

    let midRight = middle.slice(rootMidIndex + 1)
    let fonRight = font.slice(font.length - midRight.length)
    root.right = constructBiTree(fonRight, midRight)
    return root
}
let font = [1, 2, 5, 3, 6, 7]
let middle = [2, 5, 1, 6, 3, 7]
console.log(constructBiTree(font, middle))
