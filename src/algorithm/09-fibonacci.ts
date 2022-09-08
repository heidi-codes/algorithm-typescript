/**
 * @description Fibonacci
 * @author Heidi Codes
 */

// /**
//  * Fibonacci using recursion
//  * @param n
//  */
// function fibonacci(n: number): number {
//     if (n <= 0) return 0
//     if (n === 1) return 1

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

/**
 * Fibonacci using loop
 * @param n n
 */
export function fibonacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1

    let n1 = 1  // record result of (n - 1)
    let n2 = 0  // record result of (n - 2)
    let res = 0

    for (let i = 2; i <= n; i++) {
        res = n1 + n2

        // record middle result
        n2 = n1
        n1 = res
    }

    return res

}

// Functional Testing
// console.log(fibonacci(9))
