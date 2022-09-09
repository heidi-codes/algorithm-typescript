/**
 * @description Continuous Char
 * @author Heidi Codes
 */

interface IRes {
    char: string
    length: number
}

/**
 * Find the most consecutive characters and times using nested loop
 * @param str str
 */
export function findContinuousChar1(str:string): IRes {
    const res: IRes = {
        char: "",
        length: 0
    }

    const length = str.length
    if (length === 0) return res

    let tempLength = 0  // temporarily record the length of string

    // O(n)
    for (let i = 0; i < length; i++) {
        tempLength = 0  // reset

        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++
            }

            if (str[i] !== str[j] || j === length - 1) {
                // not equal, or i reached the end of str
                if (tempLength > res.length) {
                    res.char = str[i]
                    res.length = tempLength
                }

                if (i < length - 1) {
                    i = j - 1  // skip step
                }

                break
            }
        }
    }

    return res

}

/**
 * Find the most consecutive characters and times using double pointers
 * @param str str
 */
export function findContinuousChar2(str:string): IRes {
    const res: IRes = {
        char: "",
        length: 0
    }

    const length = str.length
    if (length === 0) return res

    let tempLength = 0  // temporarily record the length of string
    let i = 0
    let j = 0

    // O(n)
    for(; i < length; i++) {
        if (str[i] === str[j]) {
            tempLength++
        }
        if (str[i] !== str[j] || i === length - 1) {
            // not equal, or i reached the end of str
            if (tempLength > res.length) {
                res.char = str[j]
                res.length = tempLength
            }
            tempLength = 0  // reset

            if (i < length - 1) {
                j = i  // let j catches i
                i--
            }
        }
    }

    return res
}

// Functional Testing
// const str = "aabbcccddeeee11223"
// console.info(findContinuousChar1(str))

// Performance Testing
// let str = ""
// for (let i = 0; i< 100 * 10000; i++) {
//     str += i.toString()
// }

// console.time("findContinuousChar1")
// findContinuousChar1(str)
// console.timeEnd("findContinuousChar1")  // 219ms

// console.time("findContinuousChar2")
// findContinuousChar2(str)
// console.timeEnd("findContinuousChar2")  // 228ms
