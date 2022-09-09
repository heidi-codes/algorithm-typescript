/**
 * @description Palindrome Number
 * @author Heidi Codes
 */

/**
 * Query all symmetric numbers from 1 to 100 using reverse array
 * @param max max
 */
export function findPalindromeNumbers1(max: number): number [] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const s = i.toString()
        if (s === s.split("").reverse().join("")) {
            res.push(i)
        }
    }

    return res

}

/**
 * Query all symmetric numbers from 1 to 100 using string comparison
 * @param max max
 */
export function findPalindromeNumbers2(max: number): number [] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const s = i.toString()
        const length = s.length

        let flag = true
        let startIndex = 0
        let endIndex = length - 1
        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                flag = false
                break
            } else {
                startIndex++
                endIndex--
            }
        }
        if (flag) res.push(i)
    }

    return res

}

/**
 * Query all symmetric numbers from 1 to 100 using reverse number
 * @param max max
 */
export function findPalindromeNumbers3(max: number): number [] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        let n = i
        let rev = 0  // save reverse number

        while (n > 0) {
            rev = rev * 10 + n % 10
            n = Math.floor(n / 10)
        }

        if (i === rev) res.push(i)

    }

    return res

}

// Functional Testing
// console.info(findPalindromeNumbers3(200))

// Performance Testing
// console.time("findPalindromeNumbers1")
// findPalindromeNumbers1(100 * 10000)
// console.timeEnd("findPalindromeNumbers1")  // 408ms

// console.time("findPalindromeNumbers2")
// findPalindromeNumbers2(100 * 10000)
// console.timeEnd("findPalindromeNumbers2")  // 53ms

// console.time("findPalindromeNumbers3")
// findPalindromeNumbers3(100 * 10000)
// console.timeEnd("findPalindromeNumbers3")  // 42ms
