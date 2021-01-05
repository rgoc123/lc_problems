/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // sort
    candidates.sort((a, b) => a - b)

    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3] - 7
                       // 6

    // [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1] -

    // drill down until target is hit
    // otherwise if you exceed target, break because the other character don't matter
    // if you've drilled down for the current number, you don't need to any more so just skip

    // how do I tie return, continue, break to what needs to be done/different scenarios
        // on different levels

    const result = []

    const run = (newTarget, combo, start) => {
        if (newTarget === 0) {
            // console.log(combo)
            result.push(combo)
            return
        }

        if (newTarget < 0) return

        for (let i = start; i < candidates.length; i++) {
            const currCand = candidates[i]
            if (i > start && currCand === candidates[i-1]) continue
            run (newTarget-currCand, [...combo, currCand], i+1)
        }
    }

    run(target, [], 0)

    return result
};
