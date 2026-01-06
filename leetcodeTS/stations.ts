/*
    if stations length equal to 0 
        return the target
    sort stations by accending order
    create varibles called walkedDistance, chargedDrone, stoppingUnit

    iterate through sortedStations
        create variables curStation and calculatedUnit

        if calculatedUnit is less than or equal to 0, 
            find the difference between the curStation and stopping unit and add it to walkedDistance
            create a new stoppingUnit with the curStation
        else if the stoppingUnit is less than the target and if i is equal to the length of sortStations
            find the difference between target and stopping unit and add it to walkedDistance
        else 
            continue

    return walkedDistance
*/

function deliveryCargoTS(stations: number[], target: number): number {
    if (stations.length === 0) return target
    
    const sortedStations: number[] = stations.sort((a, b) => a - b)
    let walkedDistance: number = sortedStations[0], chargedDrone = 10
    let stoppingUnit: number = chargedDrone + sortedStations[0]

    for (let i = 0; i <= sortedStations.length; i++) {
        const curStation: number = sortedStations[i]
        const calculatedUnit: number = curStation - stoppingUnit

        if (calculatedUnit >= 0) {
            walkedDistance += calculatedUnit
            stoppingUnit = curStation + stoppingUnit
        } else if (calculatedUnit < target && i === sortedStations.length) {
            walkedDistance += target - stoppingUnit
        } else {
            continue
        }
    }

    return walkedDistance
}

