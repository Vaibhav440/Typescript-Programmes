function Second_Max(Arr) {
    var i = 0;
    var j = 0;
    var temp = 0;
    for (i = 0; i <= Arr.length; i++) {
        for (j = i + 1; j <= Arr.length; j++) {
            if (Arr[i] < Arr[j]) {
                temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
}
function Max(Arr) {
    var i = 0;
    console.log("Arry are::");
    for (i = 0; i < Arr.length; i++) {
        console.log("Arry Elements are::" + Arr[i]);
    }
    console.log("Arry Elements are::" + Arr[1]);
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
Second_Max(Arr);
Max(Arr);
