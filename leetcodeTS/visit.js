var vTS = [200, 300, 100, 200], tTS = 800;
function visits(visitors, target) {
    if (visitors.length === 0)
        return -1;
    var max = visitors[0], days = 0;
    for (var i = 1; i < visitors.length; i++) {
        if (max >= target)
            break;
        max += visitors[i];
        days++;
    }
    if (max < target)
        return -1;
    return days;
}
console.log(visits(vTS, tTS));
