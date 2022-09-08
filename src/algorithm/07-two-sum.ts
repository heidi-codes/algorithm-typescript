/**
 * @description Two Sum
 * @author Heidi Codes
 */

/**
 * Find n equaled two numbers using nested loop
 * @param arr arr
 * @param n n
 */
export function findTowNumbers1(arr: number[], n: number): number[] {
    const res: number[] = []

    const length = arr.length
    if (length === 0) return res

    // O(n^2)
    for (let i = 0; i < length - 1; i++) {
        const n1 = arr[i]
        let flag = false

        for (let j = i + 1; j< length; j++) {
            const n2 = arr[j]

            if (n1 + n2 === n) {
                res.push(n1)
                res.push(n2)
                flag = true
                break
            }
        }
        if (flag) break
    }
    return res
}

/**
 * Find n equaled two numbers using double pointers
 * @param arr arr
 * @param n n
 */
export function findTowNumbers2(arr: number[], n: number): number[] {
    const res : number[] = []

    const length = arr.length
    if (length === 0) return res

    let i = 0  // head
    let j = length - 1  // tail

    while (i < j) {
        const n1 = arr[i]
        const n2 = arr[j]
        const sum = n1 + n2

        if (sum > n) {
            // if sum is bigger than n, j will move forward
            j--
        } else if (sum < n) {
            // if sum is smaller than n, i will move backward
            i++
        } else {
            // equal
            res.push(n1)
            res.push(n2)
            break
        }
    }
    return res
}

// Functional Testing
// const arr = [1, 2, 4, 7, 8, 9, 11, 14, 17, 21, 24, 31, 55]
// console.info(findTowNumbers2(arr, 15))

// Performance Testing
// console.time("findTwoNumbers1")
// for (let i = 0; i < 100 * 10000; i++) {
//     findTowNumbers1(arr, 15)
// }
// console.timeEnd("findTwoNumbers1")  // 600ms

// console.time("findTwoNumbers2")
// for (let i = 0; i < 100 * 10000; i++) {
//     findTowNumbers2(arr, 15)
// }
// console.timeEnd("findTwoNumbers2")  // 27ms
