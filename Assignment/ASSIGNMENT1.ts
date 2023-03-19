
function Maximum(No1 : number,No2 : number,No3 : number) : void
{
    if(No1>No2 && No1>No3)
    {
        console.log("No1 is Maximum no",+No1)
    }
    else if(No2>No1&&No2>No3)
    {
        console.log("No2 is Maximum no",+No2)
    }
    else
    {
        console.log("No3 is Maximum no",+No3)
    }

}

var a : number = 23

var b : number = 89

var c : number = 6

Maximum(a,b,c)