/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Notes
    // Could have done a better job taking a little more time with the math for the 3x3 gride
        // How could I have realized that a math solution was possible? Probably just by doing a quick run through of basic math operations (e.g. quick check: does subtraction work? no. then does division work? maybe...test futher...yes)
            // Because things were grouped by a number-based value/dimension, e.g. a grid is 3x3, or the board length is 9
            // Remember the result of dividing an integer into an integer producess an integer (1/3 is 0, not 0.33, so that's a way to figure out a 0-based index grouped by 3)
                // add to math section in notes
                // except you need Math.floor() because javascript int on int love will produe a decimal lolz
            // You know that the divisor (grid width/height) can essentially create a range, or rather buckets of numbers that all have the same result, lower multiple - higer multiple-1
            // You have to take off one because...only one end can be included (<- dumb note)
            // You can sum because you have two directions to go in, so each value will pull you in the right direction, but how do you do that in order?
                // Every time you move to a new big row, you've already seen <divisor> number of grids
            // Is this just a technique, or a fundamental view?
            // How can I recognize situations where this might useful?
    // How do I recognize the need for object checker conditions, e.g. if the key doesn't exist the add it?
        // Just do the quick creation of all the keys before the real meat of the function
        // Is there a standard way for this?
    // How could I have nailed the grid checker faster? What could I have realized and when?


    // Reqs
    // is valid?
    // only filled cells need to be validated

    // Patterns
    // go thru each row (each array)
    // go thru each col (each index of each array)
    // go thru each 3x3 (...later)
    // lots of go thru each's

    // Possibilities
    // go through rows and cols in chunks of three
    // as go through rows build cols
    // as build cols build and check 3x3 (obj) // how realize this faster? (make notes of how to realize things faster)
        // obj with sub arrays or sub obj to see if value already seen
        // 1: { "8": true }, 2:
        // need to figure out how to add sub obj's
    // take a break

    // break up rows by three, while checking the row
        // prob need to reset 3x3 after each row
    // after three rows reset obj


    // Needs
    // simple checks of row, col, 3x3
        // more efficient way?
    // when false? (for each scenario above...or better way)

    // 3by3obj = {

    // }
    // 3by3counter = 1

    // Simple steps
    // separate function
    // if (col<3)
        // if (row<3) put in 1, if there return false
        // if (row<6) put in 2
        // else put in 3
    // if (col<6)

    const gridObj = {}

    const gridAddOrCheck = (gridNum, cell) => {
        if (gridObj[gridNum] && gridObj[gridNum][cell] && cell !== ".") {
            return false
        } else {
            if (!gridObj[gridNum]) gridObj[gridNum] = {}
            gridObj[gridNum][cell] = true
            return true
        }
    }

    const gridChecker = (row, col, cell) => {
        if (col < 3) {
            if (row < 3) {
                return gridAddOrCheck(1, cell)
            } else if (row < 6) {
                return gridAddOrCheck(4, cell)
            } else {
                return gridAddOrCheck(7, cell)
            }
        } else if (col < 6) {
            if (row < 3) {
                return gridAddOrCheck(2, cell)
            } else if (row < 6) {
                return gridAddOrCheck(5, cell)
            } else {
                return gridAddOrCheck(8, cell)
            }
        } else {
            if (row < 3) {
                return gridAddOrCheck(3, cell)
            } else if (row < 6) {
                return gridAddOrCheck(6, cell)
            } else {
                return gridAddOrCheck(9, cell)
            }
        }
    }


    // row checker
    // for each row
        // currCell
        // check row checker, if exists return false
        // add currCell to colBuilder, if exists return false
        // while 0-2
            // check in 3x3 for


        // if bad return false
    const rowChecker = {}
    const colChecker = {}

    let retVal = true

    for (let i = 0; i < board.length; i++) {
        const currRow = board[i]
        rowChecker[i] = {}

        currRow.forEach((cell, idx) => {
            if (rowChecker[i][cell] && cell !== ".") {
                return false
            } else {
                rowChecker[i][cell] = true
                // if (i === 0) console.log(rowChecker)

                if (colChecker[idx] && colChecker[idx][cell] && cell !== ".") {
                    return false
                } else {
                    if (!colChecker[idx]) colChecker[idx] = {}
                    colChecker[idx][cell] = true

                    const gridCheck = gridChecker(currRow, idx, cell)

                    // console.log(gridCheck)

                    if (!gridCheck) {
                        console.log([i, idx, cell])
                        retVal = false
                    }
                }
            }
        })
    }

    return retVal
};
