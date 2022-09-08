/**
 * @description Move zero to the end of array
 * @author Heidi Codes
 */

/**
 * Move sero to the end of array using nested loop
 * @param arr number arr
 */
export function moveZero1(arr: number[]): void {
    const length = arr.length
    if (length === 0) return

    let zeroLength = 0

    // O(n^2)
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0)
            arr.splice(i, 1)  // O(n)
            i--
            zeroLength++
        }
    }
}

/**
 * Move sero to the end of array using double pointer
 * @param arr number arr
 */
export function moveZero2(arr: number[]): void {
    const length = arr.length
    if (length === 0) return

    let i
    let j = -1  // point the first zero

    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            if (j < 0) {
                j = i
            }
        }

        if (arr[i] !== 0 && j >= 0) {
            // exchange
            const n = arr[i]
            arr[i] = arr[j]
            arr[j] = n

            j++
        }
    }
}

// Functional Testing
// const arr = [1, 0, 3, 4, 0, 0, 11, 0]
// moveZero2(arr)
// console.log(arr)

// Performance Testing
// const arr1 = []
// for (let i = 0; i < 20 * 10000; i++) {
//     if (i % 10 === 0) {
//         arr1.push(0)
//     } else {
//         arr1.push(i)
//     }
// }
// console.time("moveZero1")
// moveZero1(arr1)
// console.timeEnd("moveZero1")  // 2800ms

// const arr2 = []
// for (let i = 0; i < 20 * 10000; i++) {
//     if (i % 10 === 0) {
//         arr2.push(0)
//     } else {
//         arr2.push(i)
//     }
// }
// console.time("moveZero2")
// moveZero2(arr2)
// console.timeEnd("moveZero2")  // 2ms
