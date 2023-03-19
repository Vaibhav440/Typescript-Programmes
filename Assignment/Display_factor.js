function Display_factor(No) {
    var Cnt = 1;
    for (Cnt = 1; Cnt <= No; Cnt++) {
        if (No % Cnt == 0) {
            console.log("The factor is::" + Cnt);
        }
    }
}
var No = 20;
var Ret = 0;
Display_factor(No);
