/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const countArr = []

    for (let i = 0; i < n; i++) {
        let subArr = []
        for (let j = 0; j < m; j++) {
            subArr.push(1)
        }

        countArr.push(subArr)
    }


    for (let colNum = 1; colNum < n; colNum++) {
        for (let rowNum = 1; rowNum < m; rowNum++) {
            countArr[colNum][rowNum] = countArr[colNum - 1][rowNum] + countArr[colNum][rowNum - 1]
        }
    }

    return countArr[n - 1][m -1]
};
