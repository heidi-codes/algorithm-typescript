/**
 * @description Switch Letter Case Test
 * @author Heidi Codes
 */

import { switchLetterCase1, switchLetterCase2 } from "./15-switch-letter-case";

describe("Switch Letter Case", () => {
    it ("normal condition", () => {
        const str = "100aBcD$#xYz"
        const res = switchLetterCase2(str)
        expect(res).toBe("100AbCd$#XyZ")
    })

    it ("empty string", () => {
        const res = switchLetterCase2("")
        expect(res).toBe("")
    })

    it ("not alphabetic", () => {
        const res = switchLetterCase2("100%$^")
        expect(res).toBe("100%$^")
    })
})
