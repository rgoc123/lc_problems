/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // Reqs
    // begin with slash, end with not slash
    // must be shortest string representing slash

    // Ideas
    // split and join?

    // Considerations
    // how to account for ..'s and multiple of them
    // how to handle double slashes
    // how to handle single .'s

    // Questions
    // What do multiple slashes represent? '/'?

    // Examples
    // '/'
    // './'
    // '/.'
    // '../'
    // "/home/"
    // "/../"
    // "/home//foo/"
    // "/home///foo/"
    // "/a/./b/../../c/"
    // 'abc/abc'


    // Pattern
    // if special char, act accordingly
    // else build current directory

    // What
    // Identify '/', '.', '..', '//'
    // What to do for each
        // if '/', see what comes after, possibly see how many slashes there are
            // while '/'
            // if '..' or '.' (probably for next)
        // if '.', while there are '.'
            // if '..', handle that (remove previous dir from returnstr)
            // else proceed
        // else (if normal chars) start adding to master string
    // Returning a string
        // if it doesn't have the first slash add it
        // if it has a trailing slash, remove it

    // How
    // returnStr
    // currDir - ''
    // for each char
        // if special
            // act accordingly
        // else (directory name)
            // while next char is not special, build curr directory
            // when next car is special, add currDir to returnStr
        // reset currLevel at end

    // "/../"
    // "/home//foo/"
    // "/home///foo/"
    // "/a/./b/../../c/"
    // 'abc/abc'

    let newPath = ''
    let currDir = ''
    let lastDirNameLength = 0

    // handler for spaces or empty dir name ''? is that possible

    for (let i = 0; i < path.length; i++) {
        const currChar = path[i]

        if (currChar === '/') {
            if (path.slice(i, i+2) !== '//' && currDir !== '') {
                newPath = newPath + currDir + '/'
                lastDirNameLength = currDir.length
                currDir = ''
            }
        } else if (currChar === '.') {
            if (path.slice(i, i+2) === '..') {
                console.log(newPath)
                console.log(lastDirNameLength)
                if (newPath.length - (lastDirNameLength + 2) >= 0) {
                    newPath = newPath.slice(0, newPath.length - (lastDirNameLength + 2))
                } else {
                    newPath = ''
                }
            }
        } else {
            currDir += currChar
        }
    }



    // logic for finalizing slashes

    return '/' + newPath.slice(0, newPath.length-1)


    // Notes:
    // Didn't write enough pseudo code for special scenarios, could have written more about what to do
    // Didn't consider that the navigation could try to go beyond the boundary of
        // the root dir and how to handle that
    // Could have thought to use an array, would have made things simpler
        // I.e. should have considered different data structures to use
};
