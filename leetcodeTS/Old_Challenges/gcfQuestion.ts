// const shift2: number[] = [1, 4, 2, 11], stay2: number[] = [10, 1, 8, 4]

function gcfQuestion (arr1:number[], arr2:number[]): number {
    let final = Infinity
    const n: number = arr1.length

    function recursive (copyArr1: number[] = arr1, copyArr2: number[] = arr2, countdown: number = n, curMin: number = 0) {
        if (countdown === 0) return

        for (let i: number = 0; i < copyArr1.length; i++) {
            curMin += Math.abs(copyArr1[i] - copyArr2[i])
        }

        if (curMin < final) final = curMin
        copyArr1.push(copyArr1.shift())

        return recursive(copyArr1, copyArr2, countdown - 1, curMin = 0)
    }
    recursive()

    return final
}

