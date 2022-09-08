/**
 * @description Binary Search Test
 * @author Heidi Codes
 */

import { binarySearch1, binarySearch2 } from "./06-binary-search";

describe ("Binary Search", () => {
    it("normal condition", () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 40
        const index = binarySearch1(arr, target)
        expect(index).toBe(3)
    })

    it("empty array", () => {
        expect(binarySearch1([], 100)).toBe(-1)
    })

    it("can't find target", () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 400
        const index = binarySearch1(arr, target)
        expect(index).toBe(-1)
    })
})
