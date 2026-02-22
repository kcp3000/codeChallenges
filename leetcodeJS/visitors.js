const v = [200,300,100,200], t = 800

function visitorTarget (visitors, target) {
    if (visitors.length === 0) return 0
    let max = visitors[0], days = 0

    for (let i = 1; i < visitors.length; i++) {
        if (max >= target) break
        max += visitors[i];
        days++
    }

    if (max < target) return -1
    return days
}

console.log(visitorTarget(v, t))