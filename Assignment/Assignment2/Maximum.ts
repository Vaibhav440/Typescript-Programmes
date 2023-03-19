function Maximum(Arr: number[]): void {
    var i: number = 0;
    var j: number = 0;
    var temp: number = 0;

    for (i = 0; i <= Arr.length; i++) {
        for (j = i + 1; j <= Arr.length; j++) {
            if (Arr[i] > Arr[j]) {
                temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
    console.log("a" + Arr[i]);

}
