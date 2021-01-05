/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // Reqs
    // decreasing order
    // sort the string
    // same characters must be together

    // Questions
    // Does the alphabetization matter? No
    // Repeats? Yes, duh



    // Properties
    // capitalization

    // Examples
    // 'a'
    // 'ab'
    // 'aaaccc'
    // 'aeacbadfsasdffffsadf'
    // ''


    // Considerations
    // capitilization
        // group letters by lower or uppercase

    // What

    // Thoughts
    // trackerObj for count
    // iterate and build strings (or maybe count all letters)
    // sort by val length
    // iterate over sorted
    // build a string as the tracker value

    // trackerObj for count
    // iterate and build strings (or maybe count all letters)
    const tracker = {}
    for (let char of s) {
        if (!tracker[char]) {
            tracker[char] = char
        } else {
            tracker[char] = tracker[char] + char
        }
    }

    // sort by val length
    const sortedKeys = Object.keys(tracker).sort((a, b) => tracker[b].length - tracker[a].length)

   // iterate over sorted
    // build a string as the tracker value
    let newString = ''
    sortedKeys.forEach(char => {
        newString += tracker[char]
    })

    return newString
};
