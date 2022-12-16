function push(arr, value)
{
    let temp = new Array(arr.length);
    for (let i = 0; i < arr.length; i++)
    {
        temp[(i + value + arr.length) % arr.length] = arr[i];
    }
    console.log(temp);
}

let array = [1, 2, 3, 4, 5];
push(array, -3);

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