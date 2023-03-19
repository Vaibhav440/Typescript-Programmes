#include<stdio.h>
int main()
{
    int i;
    int n=0;
    int x = 11;
    for(i=1;i<=x;i++)
    {
        if(x%i==0)
        {
            n++;
        }
    }
        if(n==2)
        {
            printf("prime");
        }
        else
        {
            printf("Not prime");
        }

    

    return 0;
}