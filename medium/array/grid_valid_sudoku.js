/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowChecker = {}
    const colChecker = {}
    const gridChecker = {}

    for (let num in board) {
        rowChecker[num] = {}
        colChecker[num] = {}
        gridChecker[num] = {}
    }

    for (let rowNum in board) {
        const row = board[rowNum]

        for (let colNum in row) {
            const num = row[colNum]

            if (num !== '.') {
                const boxIndex = (Math.floor(rowNum / 3) * 3) + Math.floor(colNum / 3)

                if (
                    rowChecker[rowNum][num] ||
                    colChecker[colNum][num] ||
                    gridChecker[boxIndex][num]
                ) {
                    return false
                } else {
                    rowChecker[rowNum][num] = true
                    colChecker[colNum][num] = true
                    gridChecker[boxIndex][num] = true
                }
            }
        }
    }

    return true
};
