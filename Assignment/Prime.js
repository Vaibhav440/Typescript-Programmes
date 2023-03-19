function prime(n) {
    var i = 0;
    var C = 0;
    for (i = 1; i <= n; i++) {
        if (n % i == 0)
            (C++);
    }
    if (C == 2) {
        console.log("NOt Prime");
    }
    else {
        console.log("prime");
    }
}
var n = 12;
prime(n);
