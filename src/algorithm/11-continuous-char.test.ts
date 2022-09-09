/**
 * @description Continuous Char Test
 * @author Heidi Codes
 */

import { findContinuousChar1, findContinuousChar2 } from "./11-continuous-char";

describe("continuous char", () => {

    it("normal condition", () => {
        const str = "aabbcccddeeee11223"
        const res = findContinuousChar2(str)
        expect(res).toEqual({ char: "e", length: 4})
    })

    it("empty string", () => {
        const res = findContinuousChar2("")
        expect(res).toEqual({ char: "", length: 0})
    })

    it("without continuous char", () => {
        const str = "abc"
        const res = findContinuousChar2(str)
        expect(res).toEqual({ char: "a", length: 1})
    })

    it("all are continuous char", () => {
        const str = "aaa"
        const res = findContinuousChar2(str)
        expect(res).toEqual({ char: "a", length: 3})
    })

})
