/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // Reqs
    // return the number of unique paths

    // Ideas
    // similar to unique paths in how you move
    // need to check value of cell (e.g. if (1) don't stop or return)
    // get width and height? probably

    // Questions
    // Can an obstacle be in the end or start?

    // Examples
    // [[1]] -> 0
    // [[0]] -> 1
    // [[1], [0]] -> 0
    // [[0, 1], [1, 0]] -> 0

    // 0 1
    // 0 0

    // 1 0
    // 1 1

    // 0 0
    // 1 1
    // 0 0

    // 0 0
    // 0 0
    // 0 0

    // 0 0 0
    // 0 1 0
    // 0 0 0

    // 1 1 1
    // 1 0 1
    // 1 1 2

    // 0 0 0 0
    // 0 1 0 0
    // 0 0 0 0
    // 0 0 0 0

    // 1 1 1 1
    // 1 0 1 2
    // 1 1 2 4
    // 1 2 4 8

    // Tricks
    // already have grid
    // if on row and no obstacles, that's one
    // if obstacle, return 0 (or for iterative, change tracker cell val to 0)

    // Thoughts
    // programming
    // math
    // normal behavior

    // At end: how could I recognize the solution without knowing the original unique paths solution?
    // And what does that work? How can it be worded/thought generally and applied in the future?

    if (obstacleGrid.length === 0 || obstacleGrid[0][0] === 1) return 0

    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    // create 1s grid
    // for each row create an array for each col

    const trackerArr = []

    for (let i = 0; i < m; i++) {
        const subarr = []
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j]) {
                subarr.push(0)
            } else {
                subarr.push(1)
            }
        }
        trackerArr.push(subarr)
    }

    // console.log(trackerArr)

    // go through each row and each col (for each row...for each col), add sum to trackerArr
    for (let rownum = 1; rownum < m; rownum++) {
        for (let colnum = 1; colnum < n; colnum++) {
            if (obstacleGrid[rownum][colnum]) {
                trackerArr[rownum][colnum] = 0
            } else {
                trackerArr[rownum][colnum] = trackerArr[rownum - 1][colnum] + trackerArr[rownum][colnum - 1]
            }
        }
    }

    console.log(trackerArr)

    return trackerArr[m - 1][n - 1]

    // [[0, 0, 0, 0],[0, 1, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]]
    // [[0,0],[1,1],[0,0]]

    // Notes
    // could have thought if adding the 0 during the trackerArr creation was a good idea (and realized it wasn't)
    // didn't of a blocker row or blocker col
    // need to practice more being patient and thinking through solutions when encountering tricky edge cases
    // just because a similar solution with a simple tweak works in many cases doesn't mean you just use it
        // I should have thought through the differences more to realize a simple tweak wouldn't suffice
    // the way to think about this one was how obstacles represent what can be added to
        // a given cell from what came before, how obstacles represent that what comes after it
        // is 0, so before doesn't matter and is also 0 in a sence
    // so if what comes before in one direction is 0, you just combine what the value is from the other
        // direction

    // how do you realize what comes after a 0 in a certain direction (right or down)
    // should also be zero?
      // it follows however you iterate, e.g. for each row...for each col, or for each col...for each row

      // first create a scenario and see what comes after a blocked section should also be 0
      // then think of what would need to be filled in/replaced, and how to do that



    // the base rows matter because they are the the jumping off point for each successive intersection

    // how do you know with this you can just modify in the existing data structure?
      // probably just ask if there are any problems with modifying the exsiting structure
        // if not, then you might not need to create a new one
};
