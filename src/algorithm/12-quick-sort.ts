/**
 * @description Quick Sort
 * @author Heidi Codes
 */

/**
 * Quick Sort using splice
 * @param arr number arr
 */
export function quickSort1(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return arr

    const midIndex = Math.floor(length / 2)
    const midValue = arr.splice(midIndex, 1)[0]

    const left: number[] = []
    const right: number[] = []

    // use arr.length because arr have been changed by splice
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i]
        if (n < midValue) {
            left.push(n)
        } else {
            right.push(n)
        }
    }

    return quickSort1(left).concat(
        [midValue],
        quickSort1(right)
    )
}

/**
 * Quick Sort using slice
 * @param arr number arr
 */
export function quickSort2(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return arr

    const midIndex = Math.floor(length / 2)
    const midValue = arr.slice(midIndex, midIndex + 1)[0]

    const left: number[] = []
    const right: number[] = []

    // O(n * logn)
    for (let i = 0; i < length; i++) {
        if ( i !== midIndex) {
            const n = arr[i]
            if (n < midValue) {
                left.push(n)
            } else {
                right.push(n)
            }
        }
    }

    return quickSort2(left).concat(
        [midValue],
        quickSort2(right)
    )
}

// Functional Testing
// const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5]
// console.info(quickSort2(arr1))

// Performance Testing
// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr1.push(Math.floor(Math.random() * 1000))
// }
// console.time("quickSort1")
// quickSort1(arr1)
// console.timeEnd("quickSort2")  // 74ms

// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr2.push(Math.floor(Math.random() * 1000))
// }
// console.time("quickSort1")
// quickSort2(arr1)
// console.timeEnd("quickSort2")  // 82ms

// Compare splice and slice
// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr1.push(Math.floor(Math.random() * 1000))
// }
// console.time("splice")
// arr1.splice(5 * 10000, 1)
// console.timeEnd("splice")  // 0.012ms

// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr2.push(Math.floor(Math.random() * 1000))
// }
// console.time("slice")
// arr2.splice(5 * 10000, 5 * 10000 + 1)
// console.timeEnd("slice")  // 0.008ms
