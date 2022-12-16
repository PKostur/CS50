#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

//Rewriting the functions at the top to make the compiler read them first
int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{
    //Asks for a string to perform the following calculations
    string text = get_string("Text: ");

    float L = (float)count_letters(text) / count_words(text) * 100;
    float S = (float)count_sentences(text) / count_words(text) * 100;

    float index = 0.0588 * L - 0.296 * S - 15.8;

    //Prints a message depending on the index calculated
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index > 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", (int) round(index));
    }
}

//Checks the ascii values of each element in the string provided to see if it is a letters from A to Z or a to z
int count_letters(string text)
{
    int lcount = 0;
    //Checks the if condition for every character in the string
    for (int i = 0; i < strlen(text); i++)
    {
        if ((text[i] > 64 && text[i] < 91) || (text[i] > 96 && text[i] < 123))
        {
            lcount++;
        }
        continue;
    }
    return lcount;
}

//Checks the ascii values of each element in the string given to check if there is a space indicating it is the end of the word
int count_words(string text)
{
    int wcount = 1;
    //Checks the if condition for every character in the string
    for (int i = 0; i < strlen(text); i++)
    {

        if (text[i] == 32)
        {
            wcount++;
        }
        continue;
    }
    return wcount;
}

//Checks the ascii values of each element in the string given to see if it ends with any of ., ! or ? indicating it is the end of a sentence
int count_sentences(string text)
{
    int scount = 0;
    //Checks the if condition for every character in the string
    for (int n = 0; n < strlen(text); n++)
    {
        if (text[n] == '.' || text[n] == '?' || text[n] == '!')
        {
            scount++;
        }
    }
    return scount;
}
