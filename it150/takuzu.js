var E = -1;

let testT = [
    [0, 1, 1, 0],
    [1, 0, 0, 1], 
    [0, 1, 0, 1], 
    [1, 0, 1, 0]
]
let testF = [
    [0, 1, 1, 1],
    [1, 0, 0, 1], 
    [0, 1, 0, 0], 
    [1, 0, 1, 0]   
]
console.log(testT);

//-----------------VALIDITY CHECKS-----------------

function hasLegalElements(arr)
{
    //Loops over every element in the takuzu and checks if they are 0, 1 or -1
    //Returns true or false
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] != 1 && arr[i][j] != 0 && arr[i][j] != E)
            {
                return false;
            }
        }
    }
    return true;
}

function isLegalSize(arr)
{
    let counter1;
    //Loops over every element in the takuzu and keeps count of the elements in each array
    for (let i = 0; i < arr.length; i++)
    {
        counter1 = 0;
        for (let j = 0; j < arr[i].length; j++)
        {
            counter1++;
        }
    }
    //Returns true or false based on the amount of elements 
    if (counter1 != arr.length || counter1 % 2 != 0 || arr.length < 4)
    {
        return false;
    }
    else
    {
        return true;
    }
}    

function checkThreeInARowRow(arr)
{
    //Loops over every element in the takuzu and keeps track of the amount of identical elements in a row
    let count0;
    let count1;

    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length - 1; j++)
        {
            if (arr[i][j] == arr[i][j + 1])
            {
                if (arr[i][j] == 0)
                {
                    count0++;
                }
                else if (arr[i][j] == 1)
                {
                    count1++;
                }
            }
            //Returns true or false based on the amount of identical elements in a row
            if (count1 == 2 || count0 == 2)
            {
                return false;   
            }
        }
    }
    return true;
}

function checkThreeInARowCol(arr)
{
    let count0;
    let count1;
    //Loops over every element in the takuzu and keeps track of the amount of identical elements in a column
    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length - 1; j++)
        {
            if (arr[j][i] == arr[j + 1][i])
            {
                if (arr[j][i] == 0)
                {
                    count0++;
                }
                else if (arr[j][i] == 1)
                {
                    count1++;
                }
            }
            //Returns true or false based on the amount of identical elements in a column
            if (count1 == 2 || count0 == 2)
            {
                return false;   
            }
        }
    }
    return true;
}

function checkNoOfNumbersRow(arr) 
{
    //Loops over every element in the takuzu and keeps count of the 1's and 0's in a row
    let count0;
    let count1;
    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == 0)
            {
                count0++;
            }
            else if (arr[i][j] == 1)
            {
                count1++;
            }
            //Returns true or false based on the amount of 1's and 0's 
            if (count0 > arr.length / 2  || count1 > arr.length / 2)
            {
                return false;
            }

        }
    }
    return true;
}

function checkNoOfNumbersCol(arr)
{
    //Loops over every element in the takuzu and keeps track of the 1's and 0's in a column
    let count0;
    let count1;
    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[j][i] == 0)
            {
                count0++;
            }
            else if (arr[j][i] == 1)
            {
                count1++;
            }
            //Returns true or false based on the amount of 1's and 0's in a column
            if (count0 > arr.length / 2  || count1 > arr.length / 2)
            {
                return false;
            }

        }
    }
    return true;
}

function isLegal(arr)
{
    //Returns true if all of the functions that check for the validity of the takuzu are true 
    if ((isLegalSize(arr)) && (checkThreeInARowRow(arr)) && (checkThreeInARowCol(arr)) && (hasLegalElements(arr)) && checkNoOfNumbersRow(arr) && checkNoOfNumbersCol(arr))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isSolved(arr)
{
    //Checks if there are empty elements in the takuzu and if the takuzu passes the validity check 
    //Returns true or false
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == E)
            {
                return false;
            }
            else if ((isLegal(arr)))
            {
                continue;
            }
        }
    }
    return true;
}

//-----------------SOLVER-----------------














