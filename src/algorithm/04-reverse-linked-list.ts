/**
 * @description Reverse Linked List
 * @author Heidi Codes
 */

export interface ILinkListNode {
    value: number
    next?: ILinkListNode
}

/**
 * Reverse singly linked list and return its head node
 * @param listNode list head node
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    // define three pointers
    let prevNode: ILinkListNode | undefined = undefined
    let curNode: ILinkListNode | undefined = undefined
    let nextNode: ILinkListNode | undefined = listNode

    // based on nextNode, ergodic the linked list
    while(nextNode) {
        // delete next, prevent circular references
        if (curNode && !prevNode) {
            delete curNode.next
        }

        // reverse pointers
        if (curNode && prevNode) {
            curNode.next = prevNode
        }

        // pointers move as a whole
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }

    // curNode won't set next when nextNode is empty
    curNode!.next = prevNode

    return curNode!

}

/**
 * Create a singly linked list based on array
 * @param arr number arr
 */

export function createLinkList(arr: number[]): ILinkListNode {
    const length = arr.length
    if (length === 0) throw new Error("arr is empty")

    let curNode: ILinkListNode = {
        value: arr[length - 1]
    }

    if(length === 1) return curNode

    for ( let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }

    return curNode

}

// Functional Testing
// const arr = [100, 200, 300, 400, 500]
// const list = createLinkList(arr)
// console.info("list:", list)

// const list1 = reverseLinkList(list)
// console.info("list1:", list1)
