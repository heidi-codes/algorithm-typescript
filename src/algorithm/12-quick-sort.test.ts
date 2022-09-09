/**
 * @description Quick Sort Test
 * @author Heidi Codes
 */

import { quickSort1, quickSort2 } from "./12-quick-sort";

describe("Quick Sort", () => {
    it("normal condition", () => {
        const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9,])
    })

    it("there are negative numbers", () => {
        const arr = [-2, 2, -3, 1]
        const res = quickSort2(arr)
        expect(res).toEqual([-3, -2, 1, 2])
    })

    it("elements are the same", () => {
        const arr = [2, 2, 2, 2]
        const res = quickSort2(arr)
        expect(res).toEqual([2, 2, 2, 2])

    })

    it("empty array", () => {
        const res = quickSort2([])
        expect(res).toEqual([])
    })
})
