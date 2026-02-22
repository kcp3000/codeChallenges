const shift2 = [1, 4, 2, 11], stay2 = [10, 1, 8, 4]

function gcfQuestionJS(arr1, arr2) {
    var final = Infinity;
    var n = arr1.length;
    function recursive(copyArr1, copyArr2, countdown, curMin) {
        if (copyArr1 === void 0) { copyArr1 = arr1; }
        if (copyArr2 === void 0) { copyArr2 = arr2; }
        if (countdown === void 0) { countdown = n; }
        if (curMin === void 0) { curMin = 0; }
        if (countdown === 0)
            return;
        for (var i = 0; i < copyArr1.length; i++) {
            curMin += Math.abs(copyArr1[i] - copyArr2[i]);
        }
        if (curMin < final)
            final = curMin;
        copyArr1.push(copyArr1.shift());
        return recursive(copyArr1, copyArr2, countdown - 1, curMin = 0);
    }
    recursive();
    return final;
}

console.log(gcfQuestionJS(shift2, stay2))
