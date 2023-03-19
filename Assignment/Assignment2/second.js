function Summation(Arr) {
    var Sum = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        Sum = Sum + Arr[i];
    }
    return Sum;
}
var Arr = [23, 6, 7, 4, 5, 7];
var ans = 0;
ans = Summation(Arr);
console.log("Summation is :" + ans);
