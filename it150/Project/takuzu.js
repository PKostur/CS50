const E = -1;

//-----------------VALIDITY CHECKS----------------- (DONE)

function hasLegalElements(arr)
{
    //Loops over every element in the takuzu and checks if they are 0, 1 or -1
    //Returns true or false
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] != 1 && arr[i][j] != 0 && arr[i][j] != E) return false;
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
        for (let j = 0; j < arr[i].length; j++) counter1++;
    }
    //Returns true or false based on the amount of elements 
    if (counter1 != arr.length || counter1 % 2 != 0 || arr.length < 4) return false;
    else return true;

}    

function checkThreeInARowRow(arr)
{
    //Loops over every element in the takuzu and keeps track of the amount of identical elements in a row
    let count0, count1;

    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length - 1; j++)
        {
            if (arr[i][j] == arr[i][j + 1])
            {
                if (arr[i][j] == 0) count0++;
                else if (arr[i][j] == 1) count1++;
            }
            //Returns true or false based on the amount of identical elements in a row
            if (count1 == 2 || count0 == 2) return false;  
        }
    }
    return true;
}

function checkThreeInARowCol(arr)
{
    let count0, count1;
    //Loops over every element in the takuzu and keeps track of the amount of identical elements in a column
    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length - 1; j++)
        {
            if (arr[j][i] == arr[j + 1][i])
            {
                if (arr[j][i] == 0) count0++;
                else if (arr[j][i] == 1) count1++;
            }
            //Returns true or false based on the amount of identical elements in a column
            if (count1 == 2 || count0 == 2) return false;  
        }
    }
    return true;
}

function checkNoOfNumbersRow(arr) 
{
    //Loops over every element in the takuzu and keeps count of the 1's and 0's in a row
    let count0, count1;
    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == 0) count0++;
            else if (arr[i][j] == 1) count1++;

            //Returns true or false based on the amount of 1's and 0's 
            if (count0 > arr.length / 2  || count1 > arr.length / 2) return false;
        }
    }
    return true;
}

function checkNoOfNumbersCol(arr)
{
    //Loops over every element in the takuzu and keeps track of the 1's and 0's in a column
    let count0, count1;
    for (let i = 0; i < arr.length; i++)
    {
        count0 = 0;
        count1 = 0;
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[j][i] == 0) count0++;
            else if (arr[j][i] == 1) count1++;
   
            //Returns true or false based on the amount of 1's and 0's in a column
            if (count0 > arr.length / 2  || count1 > arr.length / 2) return false;
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
    return false;
}

function isSolved(arr)
{
    //Checks if there are empty elements in the takuzu and if the takuzu passes the validity check 
    //Returns true or false
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == E) return false;
            else if (isLegal(arr)) continue;
        }
    }
    return true;
}

//-----------------SOLVER----------------- 

function fillThreeInARowRow(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == E)
            {
                arr[i][j] = 0;
                if (isLegal(arr)) continue;
                else arr[i][j] = E;

                arr[i][j] = 1;
                if (isLegal(arr)) continue;
                else arr[i][j] = E;
            }
        }
    }
}

function fillThreeInARowCol(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[j][i] == E)
            {
                arr[j][i] = 0;
                if (isLegal(arr)) continue;
                else arr[j][i] = E;
    
                arr[j][i] = 1;
                if (isLegal(arr)) continue;
                else arr[j][i] = E;
            }
        }
    }
}

function fillByNumberOfElementsRows(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == E)
            {
                arr[i][j] = 0;
                if (isLegal(arr)) continue;
                else arr[i][j] = E;

                arr[i][j] = 1;
                if (isLegal(arr)) continue;
                else arr[i][j] = E;
            }
        }
    }
}

function fillByNumberOfElementsCols(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[j][i] == E)
            {
                arr[j][i] = 0;
                if (isLegal(arr)) continue;
                else arr[j][i] = E;

                arr[j][i] = 1;
                if (isLegal(arr)) continue;
                else arr[j][i] = E;
            }
        }
    }
}

function copy(arr)
{
    let n = arr.length;
    let copy = new Array(n);
    for (let i = 0; i < arr.length; i++)
    {
        copy[i] = new Array(n);
        for (let j = 0; j < arr.length; j++) copy[i][j] = arr[i][j];

    }
    return copy;
}

function overwrite(arr1,arr2)
{

    for (let i = 0; i < arr1.length; i++)
    {
        for (let j = 0; j < arr1[0].length; j++) 
        {
            arr2[i][j] = arr1[i][j];
        }
    }
}

function areEqual(arr, arr2)
{
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] != arr2[i][j]) return false;
        }
    }
    return true;
}



function alternativeSolve(arr)
{
    for (let i = 0; i < arr.length; i++ )
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == E)
            {
                arr[i][j] = 1;
                if (isLegal(arr)) 
                {
                    arr[i][j] = 1;
                    fillThreeInARowCol(arr);
                    fillThreeInARowRow(arr);
                    fillByNumberOfElementsRows(arr);
                    fillByNumberOfElementsCols(arr);
                }
                else arr[i][j] = E;

                arr[i][j] = 0;
                if (isLegal(arr)) 
                {
                    arr[i][j] = 0;
                
                    fillThreeInARowCol(arr);
                    fillThreeInARowRow(arr);
                    fillByNumberOfElementsRows(arr);
                    fillByNumberOfElementsCols(arr);
                }
                else arr[i][j] = E;

            }
        }   
    } 

}



//NOT DONE, HAVE TO DO BACKTRACKING
function solve(arr) 
{
    let arr1 = copy(arr);
    let arr2 = copy(arr);
    while (true) 
    {   
        //
        fillByNumberOfElementsCols(arr);
        fillThreeInARowRow(arr);
        fillByNumberOfElementsRows(arr);
        fillThreeInARowCol(arr);        

        if (!isLegal(arr)) return false;

        if (isSolved(arr)) return true;

        if (areEqual(arr, arr2)) 
        {  
            loop1:
            for (let i = 0; i < arr2.length; i++ )
            {
                for (let j = 0; j < arr2[i].length; j++)
                { 
                    if (arr2[i][j] == E)
                    {
                        arr2[i][j] = 0;
                        if (solve(arr2)){
                            overwrite(arr, arr2);
                            return true;
                        }
                        else 
                        {
                            arr2[i][j] = 1;
                            if (solve(arr2))
                            {
                                overwrite(arr, arr2);
                                return true
                            }
                            break loop1;
                        }
                    
                    }
                    

                }

            }
            
        }
        if (!areEqual(arr, arr2)) arr2 = copy(arr);
    }
}
function printPuzzle(arr)
{
    if (isSolved(arr))
    {
        alert("Done!");
        console.log(arr);
        return true;
    }
    return false;

}

function main()
{
    let test1 = [
        [0, 0, 1, 1],
        [1, 0, 1, 0], 
        [0, 1, 0, 1], 
        [1, 1, 0, 0]
    ]
    let test2 = [
        [1, E, E, 1, E, E],
        [E, 1, E, 0, 0, E], 
        [E, E, E, E, E, E], 
        [E, E, E, 0, E, E],
        [E, 0, E, E, E, E],
        [1, E, 1, E, E, E]   
    ]
}
let test1 = [
    [0, 0, 1, 1],
    [1, 0, 1, 0], 
    [0, 1, 0, 1], 
    [1, 1, 0, 0]
]
let test2 = [
    [E, 0, E, E, E, E],
    [E, 0, E, 1, E, 1], 
    [E, E, E, E, 0, E], 
    [E, E, E, E, E, E],
    [1, E, 1, E, E, 1],
    [E, E, 1, E, E, E]   
]
console.log(test2);
console.log(solve(test2));





