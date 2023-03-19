
function Fibonacci(No : number) :void
{
    var i : number = 0;
    var a : number = 0;
    console.log("values-->"+a)
    var b : number = 1;
    console.log("values-->"+b)
    for (i=2;i<=x;i++)
    { 
        var Sum : number = 0;
        Sum = a+b;
        a=b;
        b=Sum;
        if(Sum==21)
        break;
        console.log("values-->"+Sum)
    }
}

var x : number = 21;
Fibonacci(x);