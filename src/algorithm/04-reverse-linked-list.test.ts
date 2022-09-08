/**
 * @description Reverse Linked List Test
 * @author Heidi Codes
 */

import { ILinkListNode, reverseLinkList, createLinkList } from "./04-reverse-linked-list";

describe("Reverse Linked List", () => {
    it ("single element", () => {
        const node: ILinkListNode = { value: 100 }
        const node1 = reverseLinkList(node)
        expect(node1).toEqual({ value: 100 })
    })

    it ("multiple elements", () => {
        const node = createLinkList([100, 200, 300])
        const node1 = reverseLinkList(node)
        expect(node1).toEqual({
            value: 300,
            next: {
                value: 200,
                next: {
                    value: 100
                }
            }
        })
    })
})
