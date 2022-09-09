/**
 * @description Palindrome Number Test
 * @author Heidi Codes
 */

import { findPalindromeNumbers1, findPalindromeNumbers2, findPalindromeNumbers3 } from "./13-palindrome-number";

describe("palindrome number", () => {
    it ("normal condition", () => {
        const numbers = findPalindromeNumbers3(200)
        expect(numbers.length).toBe(28)
    })

    it ("max <= 0", () => {
        const numbers = findPalindromeNumbers3(0)
        expect(numbers).toEqual([])
    })
})
