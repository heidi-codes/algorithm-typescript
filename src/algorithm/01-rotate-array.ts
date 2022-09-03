/**
 * @description Rotate Array
 * @author Heidi Codes
 */

/**
 * Rotate Array using pop & unshift
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate1(arr: number[], k: number): number[] {
     const length = arr.length
     if(!k || length === 0) return arr
     const step = Math.abs(k % length) // abs: take absolute value

     for(let i = 0; i < step; i++) {
         const n = arr.pop()
         if(n != null) {
             arr.unshift(n) // array is an ordered structure, unshift is slow
         }
     }
     return arr
}

/**
 * Rotate Array using concat
 * @param arr arr
 * @param k k
 */
export function rotate2(arr: number[], k: number): number[] {
    const length = arr.length
     if(!k || length === 0) return arr
     const step = Math.abs(k % length)

     const part1 = arr.slice(-step)
     const part2 = arr.slice(0, length - step)
     const part3 = part1.concat(part2)
     return part3
}

// Functional Testing
// const arr = [1, 2, 3 ,4 ,5 ,6 ,7]
// const arr1 = rotate2(arr, 3)
// console.info(arr1)

// Performance Testing
// const arr1 = []
// for(let i = 0; i < 10 * 10000; i++) {
//     arr1.push(i)
// }
// console.time("rotate1")
// rotate1(arr1, 9 * 10000)
// console.timeEnd("rotate1")  // 900ms O(n^2)

// const arr2 = []
// for(let i = 0; i < 10 * 10000; i++) {
//     arr2.push(i)
// }
// console.time("rotate2")
// rotate1(arr2, 9 * 10000)
// console.timeEnd("rotate2")  // 6ms O(1)
