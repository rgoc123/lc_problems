/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // A perm of s1 must be in s2 as a substring

    // Thoughts
    // track count of s1
    // as iterate throught s2, if s2[i] in s1
        // if s2[i..] in s2 keep going, obj[s2[i..]]--
        // else continue iteration

    // Examples
    // 'cab', asdfasdfbac - true
    // 'ab', qwerqwerb - false

    // Properties

    // Considerations
    // what if we run into a letter that works, but the next doesn't
        // but there's still a solution out there
    // what if we run into a letter that works
        // drill down
    // how know success/end?
        // if all values in new obj are 0 (success)
        // if i in inner loop gets to length (end/fail)

    // Needs
    // identify if a perm can be found in a given substring

    // What
    // iterate through s1, create counter obj
    // iterate through s2
        // if currLtr in s1 obj
            // drill down (reduce currLtr by one, move to next)
                // if all values are 0 (or at a length), return true

    // iterate through s1, create counter obj
    let s1Counter = {}
    for (let i = 0; i < s1.length; i++) {
        const char = s1[i]
        if (!s1Counter[char]) {
            s1Counter[char] = 1
        } else {
            s1Counter[char]++
        }
    }

    const checkAllVals = (counterObj) => {
        const keys = Object.keys(counterObj)
        for (let i = 0; i < keys.length; i++) {
            if (counterObj[keys[i]] !== 0) return false
        }

        return true
    }

    // iterate through s2
    for (let j = 0; j < s2.length; j++) {
        const currLtr = s2[j]
        if (s1Counter[currLtr]) {
            const newObj = { ...s1Counter }
            for (let k = j; k < s2.length; k++) {
                if (!s1Counter[s2[k]] || s1Counter[s2[k]] < 0) break
                // check all vals
                const currLtrTwo = s2[k]
                newObj[currLtrTwo]--
                const res = checkAllVals(newObj)
                if (res) return true
            }
        }
    }

    return false

    // console.log(s1Counter)



    // Notes
    // work on abstraction in general
        // and specifially how it ties to examples and considerations/conditions/scenarios
    // How know success is a common part of problems
        // Just like data structures consider different possibilities first,
            // then identify your initial guess, then question it (how work, how fail)
    // Work on pause and think it through out loud
    // Missed consideration for repeat values
        // How identify problems that require check for repeats like this?
            //

};
