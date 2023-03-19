
function Display_factor(No : number) :void
{   
    var Cnt : number = 1;
    for(Cnt = 1;Cnt<=No;Cnt++)
    {
        if(No%Cnt==0)
        {
        console.log("The factor is::"+Cnt)
        }
    }
}

var No : number = 20;
Display_factor(No);

