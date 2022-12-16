function alternativeSolve(arr)
{
    for (let i = 0; i < arr.length; i++ )
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] == E)
            {
                arr[i][j] = 1;
                if (isLegal(arr)) arr[i][j] = 1;
                else arr[i][j] = E;
                solve(arr);
                if (isSolved(arr)) return true;

            }
            
        }   
    }
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