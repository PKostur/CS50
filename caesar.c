#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

//A program that rotates the string given by a certain amount(ascii values).

//Rewriting the functions at the top so the compiler reads them first.
bool only_digits(string digit);
char rotate(char x, int y);

int main(int argc, string argv[])
{
    //Checks if there is input on the command line.
    if (argc != 2)
    {
        printf("Error 404\n");
        return 1;
    }
    //Checks if the input is a digit.
    if (only_digits(argv[1]) == false)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    //Converts the command line input into an integer.
    int num = atoi(argv[1]);
    //Gets a string from the user
    string pt = get_string("plaintext: ");
    printf("ciphertext: ");
    //Goes every character and calls the function "rotate" on each one
    for (int i = 0; i < strlen(pt); i++)
    {
        pt[i] = rotate(pt[i], num);
        printf("%c", pt[i]);
    }
    printf("\n");
    return 0;



}

//A function that checks if the argument given is a digit
bool only_digits(string digit)
{
    for (int i = 0, n = strlen(digit); i < n; i++)
    {
        if (isdigit(digit[i]))
        {
            continue;
        }
        return false;
    }
    return true;
}

//A function that rotates the character argument given by y times.
char rotate(char x, int y)
{
    char newx;
    char zero;
    char chk;
    char nchk;
    if (x > 64 && x < 91)
    {
        //Subtracts the ascii value of 'A'.
        zero = x - 65;
        chk = zero + y;
        //Checks if the result is out of bounds of the alphabet.
        if (chk > 25)
        {
            //nchk will always be 25 or lower, thus it will not run out of bounds of the alphabet.
            nchk = chk % 25;
            newx = nchk + 64;
            return newx;
        }
        else
        {
            newx = chk + 65;
            return newx;
        }
    }
    else if (x > 96 && x < 123)
    {
        zero = x - 97;
        chk = zero + y;
        if (chk > 25)
        {
            nchk = chk % 26;
            newx = nchk + 97;
            return newx;
        }
        else
        {
            newx = chk + 97;
            return newx;
        }
    }
    else
    {
        newx = x;
        return newx;
    }
}
