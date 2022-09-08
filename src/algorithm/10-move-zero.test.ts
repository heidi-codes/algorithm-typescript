/**
 * @description Move zero to the end of array test
 * @author Heidi Codes
 */

import { moveZero1, moveZero2 } from "./10-move-zero";

describe("Move zero to the end of array", () => {

    it("normal condition", () => {
        const arr = [1, 0, 3, 4, 0, 0, 0, 11, 0]
        moveZero2(arr)
        expect(arr).toEqual([1, 3, 4, 11, 0, 0, 0, 0, 0])
    })

    it("without zero", () => {
        const arr = [1, 3, 4, 11]
        moveZero2(arr)
        expect(arr).toEqual([1, 3, 4, 11])
    })

    it("all zero", () => {
        const arr = [0, 0, 0, 0]
        moveZero2(arr)
        expect(arr).toEqual([0, 0, 0, 0])
    })

})
