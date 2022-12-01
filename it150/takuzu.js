var E = '';

let test = 
[
[1, 1, 0, 0],
[1, 0, 1, 0], 
[0, 1, 0, 1], 
[0, 1, 0, 1]
]
console.log(test);


function hasLegalElements(arr)
{
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
    let counter1 = 0;
    let counter2 = 0;
    while (true)
    {
        for (let i = 0; i < arr.length; i++)
        {
            counter1++;
            for (let j = 0; j < arr[i].length; j++)
            {
                counter2++;
            }
        }

        if (arr.length % 2 != 0 || counter1 == counter2 % 2 != 0 || arr.length < 4)
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

function checkThreeInARowRow(arr)
{
    let count0;
    let count1;

    for (let i = 0; i < arr.length - 1; i++)
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

    for (let i = 0; i < arr.length - 1; i++)
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
            if (count1 == 2 || count0 == 2)
            {
                return false;   
            }
        }
    }
    return true;
}

function isLegal(arr)
{
    if ((isLegalSize(arr)) && (checkThreeInARowRow(arr)) && (checkThreeInARowCol(arr)) && (hasLegalElements(arr)))
    {
        alert("Legal");
        return true;
    }
    else
    {
        alert("Not Legal");
        return false;
    }
}
console.log(isLegal(test));



function main(){}
