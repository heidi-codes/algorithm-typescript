/**
 * @description Binary Search Tree Test
 * @author Heidi Codes
 */

import { ITreeNode, getKthValue } from "./08-binary-search-tree";

describe("", () => {
    const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null,
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

it("normal condition", () => {
    const res = getKthValue(bst, 3)
    expect(res).toBe(4)
})

it("k is out of range", () => {
    const res1 = getKthValue(bst, 0)
    expect(res1).toBeNull()

    const res2 = getKthValue(bst, 1000)
    expect(res2).toBeNull()
})
})
