/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // Reqs
    // Return next greatest order
    // If not possible, return sorted ascending


    // 1, 3, 4, 1, 1
    // 1, 4, 1, 1, 3

    // 1, 3, 4, 2, 1
    // 1, 4, 1, 2, 3

    // 7, 4, 5, 9, 7, 8, 6
    // 7, 5, 6, 5, 7, 8, 9

    // What
    // realize currNum is greater than preceding index
    // replace preceding index with currNum
    // then take preceding val and find next index
        // need to sort remaining values

    // How
    // work backwards, loop from end
        // if i === 0, return sorted input
        // else if nums[i-1] < num[i],
            // swap values
            // combine everything before i (right index?) with sorted after
    let retretArr = null

    for (let i = nums.length-1; i >= 0; i--) {
        if (i === 0) {
            console.log('here')
            return nums.sort()
        } else if (nums[i-1] < nums[i]) {
            let currVal = nums[i]
            let preVal = nums[i-1]
            nums[i-1] = currVal
            nums[i] = preVal
            let preArr = nums.slice(0, i)
            let postArr = nums.slice(i)
            let sortedPostArr = postArr.sort()
            const newRet = [...preArr, ...sortedPostArr]
            console.log(newRet)

            return newRet
        }
    }




    // []
    // [1]


    // Considerations
    // How do we know when to swap? currHigh?
    // How do we know it's not possible?
        // Reach the first element?
};
