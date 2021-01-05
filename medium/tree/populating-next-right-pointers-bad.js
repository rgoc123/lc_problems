/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

    // set each node's left's next to the right
    // right-most sub branch of a branch needs to bridge gap
    // recursive would be tricky
    // overlapping stacks/arrays?
    // obj to track level

    // at the bottom of each level/branch, the right
    // needs to be connected to the left of the next
    // branch
        // track lastRight ()
            // how know lastRight...or right vs. left?
        // how know at nextLeft?
            // could always track lastRight, if it doesn't have a next
            // set next to nextLeft

    // main
    if (!root) return root
    let lastRight = null

    const traverse = (node, isRight) => {
        if (!node.left && !node.right) {
            if (isRight) lastRight = node
            if (!isRight && lastRight) lastRight.next = node
            return
        }

        node.left.next = node.right

        traverse(node.left, false)
        traverse(node.right, true)
    }

    traverse(root, true)

    // set right branch nodes next to null
//     let currNode = root
//     while (currNode) {
//         currNode.next = null

//     }

    // Notes:
    // Good: Thinking through different data structures
        // 1) comes up with different possible/better solutions
        // 2) helps think through different angles to either identify
            // better solutions/gaps in my approach/other angles to help
            // fully see the problem
    return root


    // track parent
    // does my parent have a right?
        // if yes, set pointer to right
        // else set to null

    // if not left, return
    // if node.left, set left to right

    // keep track of current node to receive pointer


    // recurse to right
    // recurse to left
    // if node.right, set left next to right

};
