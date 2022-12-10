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