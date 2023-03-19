
// FINDING SECOND LARGEST ELEMENT IN ARRAY
function Second_Max(Arr:number[]):void
{
   var i : number = 0;
   var j : number = 0;
   var temp : number = 0;
   for(i=0;i<=Arr.length;i++)
   {
     for(j=i+1;j<=Arr.length;j++)
     {
        if(Arr[i]<Arr[j])
        {
            temp=Arr[i];
            Arr[i]=Arr[j];
            Arr[j]=temp;
        }
     }
   }
}

function print(Arr:number[]):void
{
    var i : number = 0;
    console.log("Arry are::");
    for(i=0;i<Arr.length;i++)
    {
        console.log("Arry Elements are::"+Arr[i]);
    }
    console.log("Arry Elements are::"+Arr[1]);
}

var Arr : number[] = [23,89,6,29,56,45,77,32];

Second_Max(Arr);
print(Arr);

