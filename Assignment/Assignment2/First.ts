
//FIRST MAXIMUM ELEMENT IN ARRAY

function Maximum(Arr: number[]) :number
{
    var i : number = 0;
    var temp : number = 0;
    temp=Arr[0];
   for(i=1;i<Arr.length;i++)
   {
        if(Arr[i]>temp)
        {
            temp=Arr[i]
        }
   }
   return temp;
  
}
var Arr:number[]=[23,89,6,29,56,45,77,32]

var ret : number = 0;

ret=Maximum(Arr);

console.log("Maximum-->"+ret);