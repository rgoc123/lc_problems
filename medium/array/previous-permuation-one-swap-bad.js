/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
    // Thoughts
    // track currNextHighest
    // is there a way to check without joining every new array?
    // can we shortcut checking every number (e.g. seen values)

    // Properties

    // Examples
    // 3, 1, 2, 3 -> 2, 1, 3, 3
    // 1, 1, 2, 1 -> 1, 1, 1, 2
    // 1, 2, 1, 1 -> 1, 1, 2, 1
    // 1, 7, 4, 6, 3
    // 7, 9, 4, 6, 1 -> 6, 9, 7, 4, 1 // if first two highest don't work
        // move to the next two highest (2, 3)
    // 7, 3, 4, 9, 1 -
    // 7, 3, 8, 9, 1 -
    // 6, 9, 7, 4, 1
    // 7, 7, 7, 6, 9, 1 - 7, 7, 6, 7, 9, 1
    // 7, 7, 7, 6, 6, 9, 1 - 7, 7, 6, 6, 7, 9, 1
    // 3, 4, 2, 1 - 3, 2, 4, 1

    // 1, 7, 4, 8, 6
    // 1, 7, 8, 4, 6
    // 1, 9, 8, 7, 6
    // 1, 3, 2, 1, 9
    // 1, 2, 3, 2, 1, 9
    // 1, 2, 3, 1, 2, 9
    // 1, 2, 3, 1, 2, 9, 1

    // if currVal is gt currHi and not last el,
        // set currHi as currVal
    // else if currVal is lt currHi and gt currLo
        //
    // else if currVal is lt currHi
        // if not currLo,
            // set currLo as currVal
            // set currRet as swap
        // else if lt currLo,
            // set currHigh as currLo and currLo as currVal
            // set currRep as swap

    //, set hi as curr and lo as next

    let hi = null
    let hiIdx = null
    let lo = null
    let loIdx = null
    let currRet = [...arr]

    for (let i in arr) {
        const currVal = arr[i]
        if (currVal > hi && i !== arr.length -1) {
            hi = currVal
            hiIdx = i
        } else if (currVal < hi && currVal > lo) {
            lo = currVal
            loIdx = i
        } else {
            if (!lo) {
                lo = currVal
                loIdx = i
            } else {
                hi = lo
                hiIdx = loIdx
                lo = currVal
                loIdx = i
                currRet = [...arr]
                currRet[hiIdx] = lo
                currRet[loIdx] = hi
            }
        }
    }

    return currRet

    // Real Properties

    // Better Thoughts
    // You need to go through and find are there higher previous values?
    // You need to find two values that will produce the next highest
    // swapping to highest only works if the lo is after hi
    //

    // just iterate over highest numbers
    // What
    // create object of values-index (repeats? just replace with highest?)
        // or replace with lowest index after a certain currVal's index?
            // would require iterating over indices in key-value val
    // create array of highest numbers (array of keys, sorted hi-lo)
    // iterate over the above
        // swap to height

    // New What
    // create object of vals-indexes (val-array of indexes)
    // create array of keys sort hi-lo
    // set hi-lo
    // iterate over the above
        // swap highest index (hi-arr.length-1) of hi with lowest (loarr[0]) of lo
        // if new val lower then arr then return that
        // else change hi and lo

//     const valIdxObj = {}
//     for (let idx in arr) {
//         const currVal = arr[idx]
//         if (valIdxObj[currVal]) {
//             valIdxObj[currVal].push(idx)
//         } else {
//             valIdxObj[currVal] = [idx]
//         }
//     }

//     const keys = Object.keys(valIdxObj).sort((a, b) => b - a)
//     console.log(keys)

    // Scenarios

    // Patterns
    // how can we tell a swap will produce a higher number?
    // find next highest number?
    // go through each index (i)
        // if is arr[j] >= arr[i], skip
        // else if <, swap and compare with current next highest

    // Find highest values, track indices, iterate swapping
        // If multiple indices (repeats) what do we do?
            // Choose the highest index?

    // Questions


    // Notes:
    // do a quick assessment of brute vs. optimized
        // e.g. quick ID that it can use a backtracking,
        // but then ask what would an optimal technique look like
            // don't get caught up in always looking for backtracking
                // ID the properties that ID a problem as bactracking
    // could have thought through properties a little more
    // try to think in the abstract, e.g. in terms of generic vals and indices
        // because looking at specific examples can be blinding
    // think of which direction would be good to start from
      // starting from end is usually good when...
};
