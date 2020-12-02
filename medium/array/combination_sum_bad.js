/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // Notes
    // How realize recursion faster?
        // Repeats?
        // working with differences?
    // How realize memoization faster?
        // There are going to be multiples of the same values produced
        // 1) on their own (e.g. [2, 2, 2, 2]) and 2) with other values
        // e.g. [2, 2, 2, 4], [2, 4, 4] [2, 2, 6], [4, 6]
        // You could see the ends represent the current candidate, and
        // the fact it shows up multiple times means

    // Are there standard ways/templates for working with recursive difference
    // problems

    // Are there standard parts of a memoization like this so
    // I can show up armed with them?

    // Did an decent job of slowing down and thinking thoughtfully
    // about a new realization.

    // Came up with good examples, but could have thought of the tough
    // ones earlier, didn't put enough time in at the beginning, which
    // might have help

    // Reqs
    // unique combos, not just two sum

    // Examples
    // [2, 3, 4], 8 => [[2, 2, 2, 2], [4, 4], [2, 2, 4]]
    // [1, 2, 3, 5, 7], 8 => []
    // [2, 3, 5, 7], 10 =>

    // Edge cases
    // [], or length of 1 not matching target, length of 1 matching

    // Thoughts
    // Is it possible to only have a certain number of combos for two/multiple numbers?

    // Needs
    // combine different candidates together, and check if the
    // current candidates can be used more than once (so combine
    // candidates and then check difference against existing canditates)

    // need iterate over all candidates
        // one pass?
            // put a seen candidate in an object
            // move to next cand
            // check with current candidates (how?)
                // current checkee? cuz need to iterate through all seen

    // while still difference (have reduced target to 0 yet)
        // diff >= 0 (or > 0?)

    // prevent duplicate arrays? (how? if necessary)

    // some kind of recursion (while we haven't gone through all checkers)

    // [2, 3, 5, 7], 10 =>

    // use slice for segment?

    // keep track of seen diffs? could tell something's going to work but how will it now
        // keep track of different combos for that diff?
        // when hit that diff, what? concat current cand with all those arrays?

    // How
    // go through each candidates
    // add to obj
    // while diff >= 0
        // if 0 add to currarray
        // else keep going
    // where recurse?

    // How recognize memo faster?
    // How (memoization)
    // const retArray = []
    // const memo = {}

    // [2, 3, 5, 7], 10 =>

    // 10, 2
    // 8, 2
    // 6, 2
    // 4, 2                 { 4: [2]}
    // 2, 2                 { 2: [2]}, return true
    // 0, 2 return true

    // currDiff =
    // if currDiff < 0, return false
    // if currDiff == 0, return true
    // else if (currDiff not in memo) recurse
        // const recurseresult = recurse(diff, currCand)
        // if (recurseresult true)
            // put currCand in memo array, memo array in memo for currDiff
            // return true
    // else if (currDiff in memo)
        // iterate through all arrays in memo[currdiff] adding currcand?
        // keep going with curr cand?



};
