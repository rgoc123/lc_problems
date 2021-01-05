/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // Reqs
    // find unique combos that sum to target
    // candidates can have duplicate values
        // but that candidate can only be used one

    // Thoughts
    // backtracking
        // iterate
            // loop through remaining candidates
        // reduce
            // target - candidate
        // build output
            // build output on way down, but only push if reduction is 0
        // change start/value

    // Questions
    // negative numbers?
    // 0?
    // sorted
    // can I sort
        // if yes, great
        // otherwise a tracker obj


    // Properties
    // might run into an el more than once
    // number can be greater than target
        // what to do when reducing input?
    // unique usage
        // trackerObj
            // track index since we might hit the same value?

    // Considerations


    // Examples
    // large input
    // large target
    // []


    // What
    // go through each of candidates
    // check if
    // check if candidate is in result (?)
    // build result and push
    // for each cand, iterate over remaining while next cand (whatever index) can create
        // a new output


    // unique outputs
    // each element can only be used one

    // [1, 1, 2, 1, 2], 4
    // [1, 1, 1, 2, 2]
    // [true, false, false, false, false]

    candidates.sort((a, b) => (a - b));
    let result = [];
    visited = new Array(candidates.length).fill(false);

    function dfs(current, currentSum, startIndex, visited){
        if(currentSum == target) {
            result.push(current);
            return;
        }
        if (currentSum > target) {
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            if(i > 0 && candidates[i] == candidates[i - 1] && !visited[i - 1]) {
                continue;
            }
            visited[i] = true;
            dfs(current.concat(candidates[i]), currentSum + candidates[i], i + 1, visited);
            visited[i] = false;
        }
    }

    dfs([], 0, 0, visited);
    return result;



//     let result = []
//     const recurse = (currTarget, combo, start) => {
//         if (currTarget === 0) {
//             result.push(combo)
//             return
//         }

//         if (currTarget < 0) return

//         const currCand = candidates[start]

//         for (let j = start+1; j < candidates.length; j++) {
//             combo.push(currCand)
//             recurse(currTarget - currCand, [...combo, currCand], j)
//             combo.pop()
//         }
//     }

//     for (let i = 0; i < candidates.length; i++) {
//         recurse(target, [], i)
//     }

//     return result
};
