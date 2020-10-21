/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Notes
    // My variables were essentially special pointers, so if I had
    // consciously thought "pointers" just as standard though it may have
    // led me to realize faster that the variables I was thinking about
    // (currNode, prev, etc.) would allow one pass

    // How could I have realized if nth from last was the first that
    // my while loop would have still worked, I just need the undefined
    // condition? (I need to get better at simple math differences/start-end instances.)


    // Reqs
    // from nth from last (nth next.next, swith pointers, keep track of prev)

    // Examples (provided)
    // [1, 2], 2 => [2]

    // Patterns
    // the larger n gets, the more .next's you need

    // Thoughts
    // Is there a math technique to use, e.g. can we learn from start - nth
    // Some kind of counter outsidte the loop/recursion
    // Is there a way to use the head to determine the node to remove

    // What is needed/Simple Steps
    // Identify node
    // Switch pointers (prev)

    // How
    // Establish nthnext (while i < n) add next.next to nthNext
    // Find nth from last (while nthNext)
        // change prev to currNode
        // change currnode to next
        // change nthNext to nthNext
    // Once found
        // Change prev.next = currNode.next
        // Remove currNode.next = null

    // handle edge cases (short list)

    // nth next var
    // while i < n nthn tempnext = temptnext.next

    if (!head.next) return null

    let currHead = head
    let currNode = head
    let prevNode = null
    let nthNext = head.next

    let i = 1
    while (i < n) {
        nthNext = nthNext.next
        i++
    }

    if (!nthNext) return head.next

    while (nthNext) {
        prevNode = currNode
        currNode = currNode.next
        nthNext = nthNext.next
    }

    prevNode.next = currNode.next
    currNode.next = null

    return currHead
};
