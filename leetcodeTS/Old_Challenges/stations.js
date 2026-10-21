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
const t = 25, s = [1,2,3,9,5,7,10,20]
function deliveryCargoTS2(stations, target) {
    if (stations.length === 0)
        return target;
    var sortedStations = stations.sort(function (a, b) { return a - b; });
    var walkedDistance = sortedStations[0], chargedDrone = 10;
    var stoppingUnit = chargedDrone + sortedStations[0];
    for (var i = 0; i <= sortedStations.length; i++) {
        var curStation = sortedStations[i];
        var calculatedUnit = curStation - stoppingUnit;
        if (calculatedUnit >= 0) {
            walkedDistance += calculatedUnit;
            stoppingUnit = curStation + stoppingUnit;
        }
        else if (calculatedUnit < target && i === sortedStations.length) {
            walkedDistance += target - stoppingUnit;
        }
        else {
            continue;
        }
    }
    return walkedDistance;
}

console.log(deliveryCargoTS2(s, t))