#include <cs50.h>
#include <stdio.h>


int main(void)
{
    int input;
    int a;
    int c;
    int j;
    //Gets an input that is between 1 and 8 (inclusive)
    do
    {
        input = get_int("Height: ");
    }
    while (input > 8 || input <= 0);
        for (a = input; a > 0; a--)
        {
            //Prints the empty spaces
            for (j = a - 1; j > 0; j--)
            {
            printf(" ");
            }
            //Prints the hashes from left to right
            for (c = a; c <= input - j; c++)
            {
            printf("#");
            }

        printf("\n");
        }
}








































