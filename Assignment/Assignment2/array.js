function Maximum(Arr) {
    var i = 0;
    var temp = 0;
    var j = 0;
    for (i = 0; i <= Arr.length; i++) //Number of pass
     {
        for (j = i + 1; j <= Arr.length; j++) {
            temp = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = temp;
        }
    }
    console.log("MaX::" + Array[1]);
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
Maximum(Arr);
