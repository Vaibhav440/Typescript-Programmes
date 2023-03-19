function Maximum(Arr) {
    var i = 0;
    var temp = 0;
    temp = Arr[0];
    for (i = 1; i < Arr.length; i++) {
        if (Arr[i] > temp) {
            temp = Arr[i];
        }
    }
    return temp;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ret = 0;
ret = Maximum(Arr);
console.log("Maximum-->" + ret);
