/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    // Reqs
    // return valid combos
        // no duplicates in a combo
    // all combos unique
    // order doesn't matter
    // combos are k length

    // Thoughts
    // create a range, work through range
    // If target = 0 and combo.length === k
    // pointers?
        //
    // stop when the index gets midway
        // how to account for that with k?

    // Considerations

    // Examples
    // 3, 10 [1, 2, 7] [1, 3, 6] [1, 4, 5] [2, 3, 5]
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    // 1, 1
    // [1]

    // 2, 2
    // []

    // Properties
    // if you run through each number
    // you can build, but

    // Questions

    // What
    // create range
    // iterate over range
        // for each el
            // drill down until target < 0 or combo length greater than k
            // iterate to next

    const result = []

    let candidates = []
    for (let i = 1; i <= n; i++) {
        if (i > 9) break
        candidates.push(i)
    }

    const findSums = (newTarget, start, combo) => {
        if (newTarget === 0 && combo.length === k) {
            result.push(combo)
            return
        }

        if (newTarget < 0 || combo.length >= k) return

        // 3, 10 [1, 2, 7] [1, 3, 6] [1, 4, 5] [2, 3, 5]
        // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        for (let i = start; i < candidates.length; i++) {
            const currNum = candidates[i]
            findSums(newTarget-currNum, i+1, [...combo, currNum])
        }
    }

    findSums(n, 0, [])

    return result
};
