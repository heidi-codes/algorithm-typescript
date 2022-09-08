/**
 * @description Fibonacci Test
 * @author Heidi Codes
 */

import { fibonacci } from "./09-fibonacci";

describe("Fibonacci", () => {
    it("0 and 1", () => {
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
    })

    it("normal condition", () => {
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(fibonacci(6)).toBe(8)
    })

    it("n < 0", () => {
        expect(fibonacci(-1)).toBe(0)
    })
})
