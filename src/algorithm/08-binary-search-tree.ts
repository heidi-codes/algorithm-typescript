/**
 * @description Binary Search Tree
 * @author Heidi Codes
 */

export interface ITreeNode {
    value: number
    left: ITreeNode | null
    right: ITreeNode | null
}

const arr: number[] = []

/**
 * Binary search tree preorder traversal
 * @param node tree node
 */
function preOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    // console.log(node.value)
    arr.push(node.value)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
}

/**
 * Binary search tree inorder traversal
 * @param node tree node
 */
function inOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    inOrderTraverse(node.left)
    // console.log(node.value)
    arr.push(node.value)
    inOrderTraverse(node.right)
}

/**
 * Binary search tree postorder traversal
 * @param node tree node
 */
function postOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    // console.log(node.value)
    arr.push(node.value)
}

/**
 * Find No.K value in BST
 * @param node tree node
 * @param k No.K value
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
    inOrderTraverse(node)
    return arr[k - 1] || null

}

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
