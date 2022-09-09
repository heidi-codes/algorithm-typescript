/**
 * @description Thousandth Format Test
 * @author Heidi Codes
 */

import { format1, format2 } from "./14-thousandth-format";

describe("Thousandth Format", () => {
    it ("normal condition", () => {
        const n = 10201004050
        const res = format2(n)
        expect(res).toBe("10,201,004,050")
    })

    it ("smaller than 1000", () => {
        expect(format2(0)).toBe("0")
        expect(format2(10)).toBe("10")
    })
})
