/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    // thoughts
    //   Areas for Improvement
    //     - Focused way too much on the scenarios instead of identifying a simple process
    //     - Yeah, really tried to identify all of the different scenarios. Got sucked into that and it completely distracted me from asking "is there some flow/process/thing all of these scenarios have in common?" (i.e. you're still kind of sliding the new interval)
    //      - *Figure out how to identify situations when there are lots of scenarios that can actually be handled by a simple process(es)
    //      - *Ask is all array problems like this can be handled by simpler "greedy" process then tons of individual conditions
    //      - *Read up on this problem's description of "greedy" algorithms


    // Requirements
    // Insert new intervals into an array
    // Combine intervals as necessary (either overlapping of envelopment)
    // May need to merge multiple items

    // Examples
    // lt, gt [2, 3] [1, 5] => [1, 5]
    // lt, lt [2, 4] [1, 4] => [1, 4]
    // [[1, 2], [5, 6], [7, 8]] [3, 9] = [[1, 2], [3, 4]]

    // Needs
    // Check/skip intervals less than high end
    // Check where low end is >= low end, <= high end
    // Check where high is >= low, <= hight
    // Insert (when?)
    // Merge (when? how for different scenarios?)
    // currLow, currHigh?

    // have newInt
    // probably a new array

    // Scenarios
    //  Merge
    //    low gt, high gt - [1, 3], [2, 5] - just replace high w/ the new high
    //    low gt, high lt (2) - []
    //    low gt, high lt (n)
    //    low gt, hght lt (1) - [1, 5], [2, 3]
    //    low lt low, high lt low
    //  Insert
    //.   low gt prev high, high lt next low (push int) into new, add remaining, return


    // What is needed
    // have newInt = []
    // have currInt = intervals[i]
    // check low
        // if low > currInt[1] -> just go to next
        // if low < currint[0]
            // if high < currint[0] (does this play out elsewhere besides very beginning)
                // push [low, high], concat intervals, return
            // if high < currInt[1] (way to use ternary for finding newInt? Math.max())
                // newInt [low, currInt[1]]
            // if high > currInt[1]
                // <keep going for nextEl, do the same check (is high ___?)
                // newInt [low, high]
        // if low > currInt[0] [[1, 2], [5, 6], [7, 8]] [3, 9] = [[1, 2], [3, 4]]
            // if (!currEl) just push newInt, return
            // if (low < currInt[0])
                // if high < currInt[0] insert, return
                // if high < currInt[1] push [low, currInt[1]] return
                // if hight > currInt[1] highIsGt = true
                    // while (highIsGt) look for next value (gt low, gt high)
                    // if high < nextInt[0], push [low, high]


    let newArray = []
    const low = newInterval[0]
    const high = newInterval[1]

    let newInt = []

    for (let i in intervals) {
        let currInt = intervals[i]
        let currLow = currInt[0]
        let currHigh = currInt[1]

        if (low < currLow) {
            if (high < currLow) {
                newInt = [low, high]
                newArray = newInt.concat(intervals)
                return newArray
            } else if (high < currHigh) {
                newInt = [low, currHigh]
                newArray = [newInt]
            } // else if high > currHigh {
                // <keep going for nextEl, do the same check (is high ___?)
                // newInt [low, high]
            // }
        } else if (low > currLow ) { // if low > currLow [1, 3], [6, 9]   [2, 5]
            // if (!currEl) just push newInt, return
            // if (low < currInt[0])
                // if high < currInt[0] insert, return
                // if high < currInt[1] push [low, currInt[1]] return
                // if hight > currInt[1] highIsGt = true
                    // while (highIsGt) look for next value (gt low, gt high)
                    // if high < nextInt[0], push [low, high]
            if (low < currLow) {
                const highIsGt = false
            } else if (low > currLow && low <= currHigh) {

            }

        }
    }

    return newArray
};
