/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    // Reqs
    // Return a list of all possible strings

    // Examples
    // a1b2c
    // 1ab

    // Needs
    // look at each char
    // assess if letter or int
        // if number just add it
        // else
            // add lower to all combos
            // add upper to all combos

    let results = []

    for (let i = 0; i < S.length; i++) {
        // Could have done with out below, just start results with [""]
        if (i === 0) {
            if (!isNaN(parseInt(S[i]))) {
                console.log(parseInt(S[i]))
                results = [S[i]]
            } else {
                results = [S[i].toUpperCase(), S[i].toLowerCase()]
            }
            continue
        }

        if (!isNaN(parseInt(S[i]))) {
            results = results.map(el => el + S[i])
        } else {
            const lower = results.map(el => el + S[i].toUpperCase())
            const upper = results.map(el => el + S[i].toLowerCase())
            results = lower.concat(upper)
        }
    }

    return results
};
