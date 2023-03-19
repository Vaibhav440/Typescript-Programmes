#include<stdio.h>
void Armstrong(int No)
{
    int Reminder,temp;
    int Sum=0;
    temp=No;     //temp=153
    while(No>0)    //153>0=True
    {
        Reminder=No%10;       //153%10=3                 
        Sum=Sum+(Reminder*Reminder*Reminder);  //Initiall sum = 0 ; 0+(3*3*3)=27
        No=No/10; //153/10=15
    }


    printf("%d",Sum);



    if(temp==Sum)
    {
        printf("\nYes\n");
    }
    else
    {
        printf("\nNo\n");
    }
}
int main()
{
   int a = 153;
   Armstrong(a);
   return 0;
}