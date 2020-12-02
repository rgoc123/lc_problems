/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Reqs
    // longest substring, no repeating characters
    // return length

    // Examples
    // ""
    // "abcdabc"
    // "aaaaaaa"
    // "aaabbacaaa"
    // "abcdqwertdabcdef"
    // "abcdabcdefecdaghri"
    // "qwerasdfzxcvtyui"

    // Thoughts
    // keep going until you find a repeat, then reset curr str
    // track letters already seen (reset obj when hit a repeat?)
    // for each letter expand until you hit repeat
    // If we have two letters side by side (or close), we know the next substrings can't be longer
        // so skip to index where first letter isn't the current
            // or just skip to index+1 of first repeat

    // Considerations
    // When to hit end?
    // When to move?

    // What
    // trackerObj
    // currStr
    // currMaxLen
    // for each char
        // if not in tracker, add obj[char] = index
        // else,
            // if currStr.length > currMaxLen, currMaxLen = currStr.length
                // may need currLongestStr too
            // move start to first index + 1 of repeat, set currStr to slice new start, currEnd
            // reset obj[repeatchar] = index

    let seenCharsIdx = {}
    let currStr = ''
    let currMaxLen = 0
    let currLongestStr = ''

    // "abbacasdf"
    // "abcdabcdefecdaghri"
    let i = 0
    let j = 0
    while (j < s.length) {
        const currChar = s[j]
        // console.log(currStr)
        if (seenCharsIdx[currChar] === undefined) {
            seenCharsIdx[currChar] = j
            currStr += currChar
        } else {
            if (currStr.length > currMaxLen) {
                currMaxLen = currStr.length
                currLongestStr = currStr
            }

            // console.log(currStr)
            i = seenCharsIdx[currChar] + 1
            seenCharsIdx[currChar] = j
            currStr = s.slice(i, j+1)
        }
        j++
    }

    return currLongestStr.length

    // Notes
    // Didn't consider the "gap" scenario enough. I had the right intuition that
        // I might need to reset the entire tracker obj, but I didn't consider it enough.
    // Didn't consider I didn't need to track the currStr, just the difference between i and j
    // Didn't consider why the resetting of the index wouldn't work. Ask why something wouldn't work
};
