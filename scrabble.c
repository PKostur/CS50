#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // TODO: Print the winner
    if (score1 > score2)
    {
        printf("Player 1 Wins!\n");
    }
    else if (score2 > score1)
    {
        printf("Player 2 Wins!\n");
    }
    else
    {
        printf("'Tis a tie!\n");
    }
}

int compute_score(string word)
{
    //If the letter is lowercase, converts in to uppercase for the next check
    for (int i = 0; i < strlen(word); i++)
    {
        if (islower(word[i]))
        {
            word[i] = toupper(word[i]);
        }
    }

    int score = 0;
    int n = 0;
    int counter = 0;

    while (n < strlen(word))
    {
        int k = 65;
        //Checks every possible letter
        for (int p = 0; p < 27; p++)
        {
            //Checks every letter one by one
            int m = word[counter];
            if (m == k)
            {
                //Assigns points from the array POINTS
                score += POINTS[k - 65];
                counter++;
            }
            k++;
        }
        n++;
    }
    return score;
}
