#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int input;
    int a;
    int j;
    int c;

    //Gets an input between 1 and 8(inclusive)
    do
    {
        input = get_int("Height :");
    }
    while (input > 8 || input <= 0);

    for (a = input; a > 0; a--)
    {
        //Prints the empty spaces for the first triangle
        for (j = a - 1; j > 0; j--)
        {
            printf(" ");
        }
        //Prints the first triangle
        for (c = a; c <= input - j; c++)
        {
            printf("#");
        }
        //Prints the empty spaces between the two triangles
        printf("  ");
        //Prints the second triangle
        for (c = a; c <= input - j; c++)
        {
            printf("#");
        }
        printf("\n");
    }
}
