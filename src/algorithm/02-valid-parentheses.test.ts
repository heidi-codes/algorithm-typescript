/**
 * @description Valid Parentheses Test
 * @author Heidi Codes
 */

import { validParentheses } from "./02-valid-parentheses";

describe("Valid Parentheses", () => {
    it("normal condition", () => {
        const str = "{a(b[c]e)f}"
        const res = validParentheses(str)
        expect(res).toBe(true)
    })

    it("mismatch", () => {
        const str = "{a(b[c)]e)f}"
        const res = validParentheses(str)
        expect(res).toBe(false)
    })

    it("inconsistent order", () => {
        const str = "{a(b[c]e}f)"
        const res = validParentheses(str)
        expect(res).toBe(false)
    })

    it("empty string", () => {
        const res = validParentheses("")
        expect(res).toBe(true)
    })
})
