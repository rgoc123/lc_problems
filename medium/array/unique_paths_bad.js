/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Reqs
    // Can move right or down
    // return number of UNIQUE paths

    // Ideas
    // recursion: recurse to the width and recurse to the end as base cases
        // then return 1
        // recurse up and combine sum
        // then minus one from either col or row

    // Examples
    // [] 0
    // [[]] 1x1
    // [[], []] 2x1 - 1
    // [[1, 1]] 1x2 - 1

    // Pattern
    // all the way right
    // all the way down
    // result

    // back one
    // down one
    // all the right
    // all the down
    // result

    // What
    // every time you decrease a column, you recurse to m
    // every time you increase a row, you recurse to n

    // if you hit n, return 1

    const recurse = (col = n, row = m) = > {
        if (col === n) return 1
        if (row === m) return 1

        recurse(col)
    }

    return recurse(n, m)
};
