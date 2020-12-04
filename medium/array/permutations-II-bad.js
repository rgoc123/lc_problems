/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // Reqs
    // return UNIQUE permutations
    // order of returned permutations doesn't matter

    // Properties
    // it's gonna have an index
    // if you're seeing a value, it could match other values

    // Thoughts
    // Could swap next index with prev and then run again
    // Work way until end, go back up and swap

    // Examples
    // [1, 1, 1, 1, 1, 1, 1, 1, 1]
    // [1, 1, 1, 1, 1, 2, 1, 1, 1]
    // [1, 2, 3, 1, 2, 3, 1, 2, 3]
    // [1, 2]
    // [1]
    // []
    // [1, 1, 2, 2] if the swapee equals an already seen value don't run, just
        // move to next iteration

    // 1, 2, 3
    // 1, 2, 3
    // 1, 3, 2  1, 2, 3
    // 2, 1, 3
    // 2, 3, 1  2, 1, 3
    // 1, 2, 3
    // 3, 2, 1
    // so as long as we swap back and then move the swapee index, should run

    // Considerations
    // How do we know if a permutation as already been added?
        // when running a perm run, track if val already seen
            // if (currVal in trackerObj) skip

    // run all the way down, push
    // come up, swap, run down again
    // after loop swap current start el and last swapee back

    // What
    // master array
    const result = []

    const recurse = (startPos, nums, result) => {
        if (startPos === nums.length-1) {
            result.push(nums)
            return
        }

        const trackerObj = {}

        // [1, 2, 3, 4]
        for (let j = startPos; j < nums.length; j++) {
            if (!trackerObj[nums[j]]) {
                trackerObj[nums[j]] = true
                recurse(j+1, nums, result)
                let startVal = nums[startPos]
                let swapeeVal = nums[j+1]
                nums[startPos] = swapeeVal
                nums[j+1] = startVal
            }
        }

        // let newstartVal = nums[startPos]
        // let newswapeeVal = nums[nums.length-1]
        // nums[startPos] = newswapeeVal
        // nums[nums.length-1] = newstartVal
    }

    for (let i = 0; i < nums.length; i++) {
        recurse(i+1, nums, result)
    }

    // recursive function (startPos, nums)
        // if startPos === length of input, push current nums
        // trackObj
        // for each element
            // if el not in trackerObj
                // add el to trackerObj
                // for each el in subarray
                // we'll need to swap start pos with swapee index
                    //

                // then swap back

            // increase swapee element

    // return master array
    return result
};
