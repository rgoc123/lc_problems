/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // Reqs
    // find shortest sequence, return length
    // change one letter at a time
    // each transformed word must be in list

    // Properties
    // letters in certain indexes match
    // there might be more than one way to move through words
    //

    // Questions
    // Is the word list alphabetized?
        // Can I sort it?
    // All words the same length?

    // Thoughts
    // branch neighbors based on letter-index matching
    // count appearance of numbers in indexes (no)
    // move from current work (could act as node)
    // or have stack and move through wordlist adding to stack
        // or back track if a bad end is found
        // and track index of changed letter?
    // Difference in number of letters
        // Could count number of and track indices that differ
        //

    // Considerations

    // Examples
    // []
    // bat, bar [bar]

    // beginWord = "hog",
    // endWord = "cog",
    // wordList = ["hot","dog","dot","lot","log","cog"]

    // What
    // iterate through each letter in beginWord
        // iterate through each word in wordlist
            // if changing one letter works (and it's not in stack...have obj for tracking
            // and change to false when popping it off)
                // if it's the end word, check length of stack and change as appropriate
                // else add to stack

    // Notes
    // "shortest path" might mean graph
    // Could have thought through properties of the word: we don't know which index of the start word
        // would lead to the shortest path, i.e. we're likely going to have to iterate through
        // each letter and then iterate through each item in the word list
    // Didn't consider that number of mismatched indices could be used

    // Do the conditions in a solution just match the problem's conditions (true), opposites (false) and everything in between?
};
