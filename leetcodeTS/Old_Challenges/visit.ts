const vTS: number[] = [200,300,100,200], tTS: number = 800

function visits(visitors:number[], target:number):number {
    if (visitors.length === 0) return -1
    let max:number = visitors[0], days:number = 0

    for (let i = 1; i < visitors.length; i++) {
        if (max >= target) break

        max += visitors[i]
        days++
    }

    if (max < target) return -1
    return days
}

console.log(visits(vTS, tTS))