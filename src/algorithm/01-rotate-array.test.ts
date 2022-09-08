/**
 * @description Rotate Array Test
 * @author Heidi Codes
 */

import { rotate1, rotate2 } from "./01-rotate-array";

describe("Rotate Array", () => {
    it("normal condition", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 3

        const res = rotate1(arr, k)
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]) // assert
    })

    it("array is empty", ()=> {
        const res = rotate1([], 3)
        expect(res).toEqual([])
    })

    it("k is negative", ()=> {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = -3

        const res = rotate1(arr, k)
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    })

    it("k is zero", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 0

        const res = rotate1(arr, k)
        expect(res).toEqual(arr)
    })

    it("k isn't a number", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = "abc"

        //@ts-ignore
        const res = rotate1(arr, k)
        expect(res).toEqual(arr)
    })
})

// npx jest src/algorithm/01-rotate-array.test.ts
