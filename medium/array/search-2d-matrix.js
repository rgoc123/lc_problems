/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Notes
    // Excellent: Wrote initial thoughts
    // Excellent: Came up with good optimizations right away
    // Excellent: Thought through and came up with examples
    // Excellent: Follow process steps
    // Good: Identified special scenarios (gaps between rows)
        // Could have took more time in the beginning to
        // identify this caveat of the problem.


    // prob a way to skip based on end or begin
    // some kind of binary search

    // sorted in the rows, so could to bi-search in row

    // return bool

    // Questions
    // are all cells always full?

    // Considerations
    // what if target is between rows?
        // if target less then row[0]
    // what to do for large grids?
        // first bi-search for the row
        // then bi-search for the cell

    // Examples
    // [] - false
    // [[1]], 2 - false
    // [[1], [2]], true - true
    // [[], [], [], [], [], []]

    // What
    // let retVal = false
    // loop through rows to find row
    // loop through cells to find target
    // return reVal

    for (let row of matrix) {
        if (target <= row[row.length-1]) {
            for (let cell of row) {
                if (cell === target) {
                    return true
                }
            }
        }
    }


    return false
};
