let n = 6;
let o = 0;
var empty = '';

arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
    for (let j = 0; j < n; j++) {
        arr[i][j] = ++o % 2;
        
    }
}


function isLegal(arr)
{
    if (isLegalSize == ValChkCol == ValChkRows == true)
    {
        alert("Legal");
        return true;
    }
    else
    {
        alert("Not Solvable");
        return false;
    }
}
console.log(isLegal(arr));



function isLegalSize(puzzle)
{
    let counter = 0;
    while (true)
    {
        for (let i = 0; i < arr.length; i++)
        {
            counter++;
            for (let j = 0; j < arr[i].length; j++)
            {
                counter++;
            }
        }

        if (arr.length % 2 != 0 || counter % 2 != 0 || arr.length < 4)
        {
            return false;
        }
        else
        {
            return true;
        }
    }    

}

function solver (arr)
{
    while (true)
    {
        let i = ValChkRows(arr);
        if (i)
        {
            
        }
        else
        {
            break;
        }
    }
}

function ValChkRows(arr)
{
    let count = 0;

    for (let i = 0; i < arr.length; i ++)
    {
        for (let j = 0; j <= i; j++)
        {
            if (arr[i][j] == arr[i][j - 1])
            {
                count++;
            }

            if (count > 2 )
            {
                return false; 
            }
            else if (count <= 2 && j == arr.length - 1)
            {
                return true;
            }  
        }
    }
}

function ValChkCol(arr)
{
    let count = 0;
    for (let k = 1; k < arr.length; k++)
    {
        for (let l = 0; l <= k; l++)
        {
            if (arr[k][l] == arr[k - 1][l])
            {
                count++;
            }

            if (count > 2 )
            {
                return false;
            }
            else if (count <= 2 && l == arr.length - 1)
            {
                return true;
            }    
        }
    }
}

