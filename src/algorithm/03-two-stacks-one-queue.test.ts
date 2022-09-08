/**
 * @description Two Stacks One Queue Test
 * @author Heidi Codes
 */

import { MyQueue } from "./03-two-stacks-one-queue";

describe("Two Stacks One Queue", () => {
    it("add", () => {
        const q = new MyQueue()
        expect(q.length).toBe(0)

        q.add(100)
        q.add(200)
        q.add(300)
        expect(q.length).toBe(3)
    })

    it("delete", () => {
        const q = new MyQueue()
        expect(q.delete()).toBeNull()

        q.add(100)
        q.add(200)
        q.add(300)
        expect(q.delete()).toBe(100)
        expect(q.length).toBe(2)
        expect(q.delete()).toBe(200)
        expect(q.length).toBe(1)
    })
})
