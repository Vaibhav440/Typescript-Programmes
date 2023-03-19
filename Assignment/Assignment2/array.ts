
function Maximum(Arr:number[]):number
{
   var i : number =0;
   var temp : number = 0;
   var j : number =0;
   for(i=0;i<=Arr.length;i++)//Number of pass
   {
        for(j=i+1;j<=Arr.length;j++)
        {
            temp=Arr[i];        
            Arr[i]=Arr[j];
            Arr[j]=temp;
        }
    }
    
}

var Arr : number[]=[23,89,6,29,56,45,77,32];
Maximum(Arr);