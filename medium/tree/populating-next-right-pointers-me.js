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

    // BFS
    // for both children

    // add the children
    // set currNode next to queue[0]
    if (!root || !root.left) return root

    let queue = [root.left, root.right]

    while (queue.length > 0) {
        const currNode = queue.shift()

        if (currNode && currNode.left) {
            queue.push(currNode.left)
            queue.push(currNode.right)
        }

        currNode.next = queue[0]
    }

    let currNode = root
    while (currNode) {
        currNode.next = null
        currNode = currNode.right
    }

    return root

    // Notes:
    // With trees, always consider what to do with leaf nodes
      // i.e. how to stop the recursion/move onto the next element in while loop
    // With perfect BST, you know non-leaf nodes will have both a left and right
    // With pointers, consider what types of connections need to be made
    // Think of what traversal methods might make sense, and what properties
      // of each could serve the problem best
    // I think BFS/level-order traversal allows you to see/modify all nodes
      // at the current and next levels, and you it will still work through
      // all the nodes (you just from the current level's right most node to the
      // next leve's left most by ...)

      // It can be helpful to think of BFS/level-order as a linked list

    // For BFS/level-order, you can use a while loop to work down each level on one side
      // of the tree (e.g. left), and then another while/for loop for each
      // node on the current level
        // You just need to establish pointers to use a while loop
      // You work one level at a time because you can't keep track of things
        // when DFSing from one branch to the next/across different sides of the tree
};
