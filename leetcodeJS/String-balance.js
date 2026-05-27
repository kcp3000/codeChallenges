const s = "RLRRLLRLRL"

function balancedStringSplit(s) {
    let counter = 0
    let rCount = 0, lCount = 0
    
    for (const element of s) {
        if (element === "R") rCount++
        if (element === "L") lCount++
        console.log({rCount, lCount, element})
        if (rCount === lCount) {
            counter++
            rCount = 0
            lCount = 0
        }
        // console.log({RLPairs})
    }
    return counter
}

//another solution
// function balancedStringSplit(s) {
//     const RLPairs = []
//     let rCount = "", lCount = ""
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "R") rCount += s[i]
//         else if (s[i] === "L") lCount += s[i]

//         if (rCount.length === lCount.length) {
//             rCount += lCount
//             RLPairs.push(rCount)
//             rCount = ""
//             lCount = ""
//         }
//     }
//     return RLPairs.length
// }

console.log(balancedStringSplit(s))