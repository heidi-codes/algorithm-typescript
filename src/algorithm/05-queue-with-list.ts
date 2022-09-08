/**
 * @description Queue with Linked List
 * @author Heidi Codes
 */

interface IListNode {
    value: number
    next: IListNode | null
}

export class MyQueue {
    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len = 0

    /**
     * Enqueue at the tail position
     * @param n number
     */
    add(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null
        }

        // handle head
        if (this.head == null) {
            this.head = newNode
        }

        // handle tail
        const tailNode = this.tail
        if (tailNode) {
            tailNode.next = newNode
        }
        this.tail = newNode

        // record length
        this.len++

    }

    /**
     * Dequeue at the head poition
     */
    delete(): number | null {
        const headNode = this.head
        if (headNode == null) return null
        if (this.len <= 0) return null

        const value = headNode.value

        this.head = headNode.next

        this.len--

        return value

    }
    get length(): number {
        return this.len
    }
}

// Functional Testing
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info("length1", q.length)
// console.log(q.delete())
// console.info("length2", q.length)
// console.log(q.delete())
// console.info("length3", q.length)
// console.log(q.delete())
// console.info("length4", q.length)
// console.log(q.delete())
// console.info("length5", q.length)
// console.log(q.delete())


// Performance Testing
// const q1 = new MyQueue()
// console.time("queue with list")
// for(let i = 0; i < 10 * 10000; i++) {
//     q1.add(i)
// }
// for(let i = 0; i < 10 * 10000; i++) {
//     q1.delete()
// }
// console.timeEnd("queue with list")  // 11ms

// const q2 = []
// console.time("queue with array")
// for(let i = 0; i < 10 * 10000; i++) {
//     q2.push(i) // Enqueue
// }
// for(let i = 0; i < 10 * 10000; i++) {
//     q2.shift() // Dequeue
// }
// console.timeEnd("queue with array")  // 6486ms
