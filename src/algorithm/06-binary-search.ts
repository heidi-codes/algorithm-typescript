/**
 * @description Binary Search
 * @author Heidi Codes
 */

/**
 * Binary search using loop
 * @param arr arr
 * @param target target
 */
export function binarySearch1(arr: number[], target: number): number {
    const length = arr.length
    if(length === 0) return -1

    let startIndex = 0
    let endIndex = length - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)
        const midValue = arr[midIndex]

        if(target < midValue) {
            endIndex = midIndex - 1
        } else if (target > midValue) {
            startIndex = midIndex + 1
        } else {
            return midIndex
        }
    }

    return -1

}

/**
 * Binary search using recursion
 * @param arr arr
 * @param target target
 * @param startIndex start index
 * @param endIndex end index
 */
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
    const length = arr.length
    if (length === 0) return -1

    // range of start and end
    if (startIndex == null) startIndex = 0
    if (endIndex == null) endIndex = length - 1

    // if start and end meet, it will end
    if (startIndex > endIndex) return -1

    // middle position
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (target < midValue) {
        // if the target value is smaller, continue to search in the left
        return binarySearch2(arr, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        // if the target value is bigger, continue to search in the right
        return binarySearch2(arr, target, midIndex + 1, endIndex)
    } else {
        return midIndex
    }
}

// Functional Testing
// const arr = [10, 20, 30, 40, 50, 60]
// const target = 20
// console.info(binarySearch2(arr, target))

// Performance Testing
// console.time("binarySearch1")
// for(let i = 0; i < 100 * 10000; i++) {
//     binarySearch1(arr, target)
// }
// console.timeEnd("binarySearch1")  // 16ms

// console.time("binarySearch2")
// for(let i = 0; i < 100 * 10000; i++) {
//     binarySearch2(arr, target)
// }
// console.timeEnd("binarySearch2")  // 32ms
