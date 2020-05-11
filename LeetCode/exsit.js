/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist1 = function (board, word) {
    let map = new Map()
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            for (let k = 0; k < word.length; k++) {
                if (board[i][j] === word[k]) {
                    if (map.get(word[k])) {
                        let val = map.get(word[k])
                        val.add([i, j].join(''))
                        map.set(word[k], val)
                    } else {
                        map.set(word[k], new Set([[i, j].join('')]))
                    }
                }
            }
        }
    }
    for (var [key, value] of map) {
        map.set(key, [...value])
    }
    return map
};
var exist2 = function (board, word) {
    let dfs = function (board, word, i, j, k) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || k >= word.length || !board[i][j]) {
            return false;
        }
        if (board[i][j] !== word[k]) {
            return false
        }
        if (k === word.length - 1) {
            return true
        }
        let tmp = board[i][j]
        board[i][j] = null
        let res = dfs(board, word, i - 1, j, k + 1) ||
            dfs(board, word, i + 1, j, k + 1) ||
            dfs(board, word, i, j - 1, k + 1) ||
            dfs(board, word, i, j + 1, k + 1);
        board[i][j] = tmp
        return res
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true
            }
        }

    }
    return false
};
let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
]
let word = "ABCCED"
console.log(exist2(board, word))
