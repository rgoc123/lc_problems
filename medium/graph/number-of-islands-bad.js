/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Reqs
    // return number of islands
    // an island has water on top and bottom and left and right, not diagonals

    // Properties
    // islands are connected 1s, meaning ones are next to each other
    // it's the same math for each of a 1 cell's possible island indices
        // top is character[row-1][col], bottom is character[row+1][col]
    // there are gaps

    // Thoughts
    // check those indices, if 1 connect it to existing island
    // do we only need to focus on those to the left and top

    // Considerations
    // How do we track an island?
        // First index of island tracked, key store in set for index of matrix?
            // I don't think we need the set

    // Examples
    // [
    //   ["1","1"],
    //   ["1","1"]
    // ]

    // ["1"]

    // []

    // [
    //   ["1","1","0","0","0","0"],
    //   ["1","1","0","0","0","0"],
    //   ["0","0","1","0","0","0"],
    //   ["0","0","0","1","0","1"],
    //   ["0","0","0","1","0","1"]
    // ]

    // What
    // trackerObj
    // currCount = 0
    // for each sub array (row)
        // for each el (col)
            // check connections (helper function)
                // if 1 and previous connection, don't do anything
                // else if 1 add counter
    // return currCount

    const trackerObj = {}
    let currCount = 0

    const checkTopAndLeft = (rownum, colnum) => {
        const topVal = grid[rownum-1] ? grid[rownum-1][colnum] : null
        const leftVal = grid[rownum][colnum-1] ? grid[rownum][colnum-1] : null

        // console.log('colnum is ' + colnum.toString())
        // console.log(topVal)
        // console.log(leftVal)

        return topVal === "1" || leftVal === "1"
    }

    for (let rownum = 0; rownum < grid.length; rownum++) {
        const row = grid[rownum]
        for (let colnum = 0; colnum < row.length; colnum++) {
            const el = row[colnum]
            const isConnection = checkTopAndLeft(rownum, colnum)

            if (el === "1" && !isConnection) {
                currCount++
            }
        }
    }

    return currCount


    // Notes
    // It seems like graph problems often use a matrix. What's the best way to assess
        // when a matrix is a graph problem?
    // Improve: Didn't think of what to do with the properties at each element
    // Ok: Could have thought of what properties my approach of iteration would create and how they would impact the elements, and also could have thought of how the element properties would impact my approach
    // Could have better thought of the essence of connections and what that means for how
        // I could know there's still a connection
        // And then incorporated this with the essence of moving iteratively
    // Bad: Did not come up with examples to identify flaws in my top-left approach
    // In matrix graph problems you probably need to have a helper function to DFS
};
