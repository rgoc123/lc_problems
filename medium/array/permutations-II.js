/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = []
    const counterObj = {}

    nums.forEach(num => {
        if (!counterObj[num]) {
            counterObj[num] = 1
        } else {
            counterObj[num] = counterObj[num] + 1
        }
    })

    const backtrack = (combos, counter) => {
        if (combos.length === nums.length) {
            results.push([ ...combos ])
            return
        }

        const counterKeys = Object.keys(counter)
        for (let num of counterKeys) {
            if (counter[num] > 0) {
                combos.push(num)
                counter[num] -= 1

                backtrack(combos, counter)

                counter[num] += 1
                combos.pop()
            }
        }
    }

    backtrack([], counterObj)

    return results
};
