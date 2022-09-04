/**
 * @description Valid Parentheses
 * @author Heidi Codes
 */

/**
 * @param left left parenthesis
 * @param right right parenthesis
 */
function isMatch(left: string, right: string): boolean {
    if (left === "{" && right === "}") return true
    if (left === "[" && right === "]") return true
    if (left === "(" && right === ")") return true
    return false
}

/**
 * @param str str
 */
export function validParentheses(str: string): boolean {
    const length = str.length
    if(length === 0) return true

    const stack = []

    const leftParenthesis = "{[("
    const rightParenthesis = "}])"

    for(let i = 0; i < length; i++) {  // O(n)
        const s = str[i]

        if(leftParenthesis.includes(s)) {
            stack.push(s)
        } else if (rightParenthesis.includes(s)) {
            const top = stack[stack.length - 1]
            if (isMatch(top, s)) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

// Functional Testing
// const str = "{a(b[c]e)f}"
// console.info(validParentheses(str))
