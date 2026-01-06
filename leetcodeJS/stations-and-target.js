/*
You are designing a delivery system using drones in a linear warehouse. The warehouse is represented as a number line starting at position 0 and ending at position target (target > 0). 
Along this line, there are charging stations placed at various positions, represented by an array stations, where stations[i] is the position of the ith charging station.
Each drone has a limited battery that allows it to travel a maximum of 10 units after being fully charged. 
For example, if a drone is charged at position 12, it can travel to positions 12, 13, 14, ..., up to position 22 (inclusive), but cannot reach position 23 or beyond without recharging.

Your delivery protocol requires the following steps:
From your current position, pick up the cargo and carry it on foot to the nearest charging station ahead of you. 
If there are no more stations ahead, carry the cargo on foot to the target position.

Deploy a fully charged drone from this station and send it with the cargo as far as possible toward the target.

If the target hasn't been reached, walk to the point where the drone landed to retrieve the cargo, then repeat from step 1.
Your task is to calculate the total distance over which you must carry the cargo on foot, from position 0 to position target.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(stations.length × target) will fit within the execution time limit.


Examples

For target = 23 and stations = [7, 4, 14], the output should be solution(target, stations) = 4.
Starting at 0, you find the nearest station at position stations[1] = 4, so you carry the cargo on foot for 4 units to get there, and then deploy a drone that travels to position 14.
There is another station at 14 (stations[2] = 14), which you use to deploy another drone that reaches the target position target = 23.
Therefore, you carried the cargo on foot only 4 units in total.

For target = 27 and stations = [15, 7, 3, 10], the output should be solution(target, stations) = 7.
Starting at position 0, you find the nearest station ahead is at position stations[2] = 3, so you carry the cargo on foot for 3 units to get there, and then deploy a drone that travels to position 13.
From position 13, the nearest station ahead is at position stations[0] = 15, which requires carrying the cargo on foot for 2 more units, and from there your drone reaches position 25.
There are no more stations ahead, so you carry the cargo on foot for 2 more units to the target position.
Therefore, you carried the cargo on foot 3 + 2 + 2 = 7 units in total.

For target = 10 and stations = [], the output should be solution(target, stations) = 10.
There are no charging stations available, so you must carry the cargo on foot the entire distance, which is 10 units.

Input/Output
• [execution time limit] 4 seconds (js)
• [memory limit] 1 GB
• [input] integer target
An integer representing the target position you need to reach.
Guaranteed constraints:
 1 ≤ target ≤ 1000.
• [input] array.integer stations
An array of charging station positions. It is guaranteed stations will all be at different positions.
Guaranteed constraints:
 0 ≤ stations.length ≤ 200,
 1 ≤ stations[i] < target.
• [output] integer

Using the protocol described above, return the total distance over which you must carry the cargo on foot.

E
target = 23 and stations = [7, 4, 14]

sortedStations = [4, 7, 14]
                  ^
walked = 4
first iteration 
4 + 10
(walked 4 units then charged at unit 4, drone will go 10 units nonstop (stopping at unit 14, hence the 10 + 4))
[4, 7, 14]
    ^
skips 7 since expected stopping unit of the drone is 14 and 14 > 7

[4, 7, 14]
        ^
stops at unit 14 but we still do the calucations of what was walked
14 - 14 = 0
add 0 to walked
and create your new stoppingUnit
14 + 10 = 24

target = 23
since the stopping unit is 24 and 24 > 23, we know that the drone will carry the cargo to the target unit, therefore we stop with our total walkedDistance being 4.


A 
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
//output should be 10

function deliveryCargo (stations, target) { //time: O(n log n) space: O(1)
    if (stations.length === 0) return target
    const sortedStations = stations.sort((a, b) => a - b)
    // console.log(sortedStations)
    let walkedDistance = sortedStations[0], chargedDrone = 10
    let currStoppingUnit = chargedDrone + sortedStations[0]
    // console.log("before:" ,{walkedDistance, currStoppingUnit}, sortedStations.length)

    for (let i = 0; i <= sortedStations.length; i++) {
        const currStation = sortedStations[i]
        let calculatedDistance = currStation - currStoppingUnit
        
        if (calculatedDistance >= 0) {
            walkedDistance += calculatedDistance
            currStoppingUnit = currStation + chargedDrone
        } else if (currStoppingUnit < target && i === sortedStations.length) {
            walkedDistance += target - currStoppingUnit
        } else {
            continue
        }
        // console.log("inside loop:" ,{walkedDistance, currStoppingUnit, calculatedDistance, i})
    }

    // console.log("after:" ,{walkedDistance, currStoppingUnit})
    return walkedDistance
}

console.log(deliveryCargo(s, t))
