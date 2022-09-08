/**
 * @description Two Sum Test
 * @author Heidi Codes
 */

import { findTowNumbers1, findTowNumbers2 } from "./07-two-sum";

describe("Two Sum", () => {
    it("normal condition", () => {
        const arr = [1, 2, 4, 7, 11, 15]
        const res = findTowNumbers2(arr, 15)
        expect(res).toEqual([4, 11])
    })

    it("empty array", () => {
        const res = findTowNumbers2([], 100)
        expect(res).toEqual([])
    })

    it("can't find result", () => {
        const arr = [1, 2, 4, 7, 11, 15]
        const n = 100
        const res = findTowNumbers2(arr, n)
        expect(res).toEqual([])
    })
})
