

/*
Armstrong number is number in which summation of cube of its element is given number

Ex - 153
1*1*1=1
5*5*5=125
3*3*3=27

1+125+27=153
153 is armstrong number
*/

function Armstrome(No : number) :void
{
    var Reminder:number=0;
    var Sum:number=0;
    var temp:number=0;
    temp=No;
    while(No>0)    //153>0=True
    {
        Reminder=No%10;       //153%10=3                 
        Sum=Sum+(Reminder*Reminder*Reminder);  //Initiall sum = 0 ; 0+(3*3*3)=27
        No=No/10; //153/10=15
    }


    console.log("",+Sum);



    if(temp==Sum)
    {
        console.log("\nYes\n");
    }
    else
    {
        console.log("\nNo\n");
    }

}

var x : number = 371;
Armstrome(x);


