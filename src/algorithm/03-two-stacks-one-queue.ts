/**
 * @description Two Stacks One Queue
 * @author Heidi Codes
 */

export class MyQueue {
    private stack1: number[] = []
    private stack2: number[] = []

    /**
     * enqueue
     * @param n n
     */
    add(n: number) {  // O(1)
        this.stack1.push(n)
    }

    /**
     * dequeue
     */
    delete(): number | null {  // O(n)
        let res

        const stack1 = this.stack1
        const stack2 = this.stack2

        // move all elements of stack 1 to stack 2
        while(stack1.length) {
            const n = stack1.pop()
            if (n != null) {
                stack2.push(n)
            }
        }

        // stack2 pop
        res = stack2.pop()

        // return all elements of stack 2 to stack 1
        while(stack2.length) {
            const n = stack2.pop()
            if (n != null) {
                stack1.push(n)
            }
        }

        return res || null

    }

    get length(): number {
        return this.stack1.length
    }
}

// Functional Testing
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
