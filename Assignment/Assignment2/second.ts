
function Summation(Arr:number[]):number
{
    var Sum : number = 0;
    var i : number = 0;
    for(i=0;i<Arr.length;i++)
    {
    Sum=Sum+Arr[i];
    }
    return Sum;
   
}

var Arr : number [] =[23,6,7,4,5,7];

var ans: number = 0;

ans=Summation(Arr);
console.log("Summation is :"+ans);