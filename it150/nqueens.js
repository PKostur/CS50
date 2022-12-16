const E = 0;
var testArray;
var noOfQueens = 0;
var restrictedColumns =  new Set();
var restictedDiagonalPlus = new Set();
var restictedDiagonalMinus = new Set();
let n = 5;


function generateEmpty(n)
{
    testArray = new Array(n);
    for (let i = 0; i < n; i++)
    {
        testArray[i] = new Array(n);
        for (let j = 0; j < n; j++) testArray[i][j] = E;
    }
    return testArray;
}


function isSafe(x, y, restrictedColumns, restictedDiagonalPlus, restictedDiagonalMinus)
{
    if (restrictedColumns.has(y) || restictedDiagonalPlus.has(x + y) || restictedDiagonalMinus.has(y - x)) return false;
    else return true;
}

function solve(board, i, restrictedColumns, restictedDiagonalPlus, restictedDiagonalMinus, noOfQueens)
{
    let sizeboard = board.length;
    if (noOfQueens == sizeboard) return true;
    if (i >= sizeboard) return false;

    for (let j = 0; j < sizeboard; j++)
    {
        if (isSafe(i, j, restrictedColumns, restictedDiagonalPlus, restictedDiagonalMinus))
        {
            board[i][j] = 1;
            noOfQueens += 1;
            restrictedColumns.add(j);
            restictedDiagonalPlus.add(i + j)
            restictedDiagonalMinus.add(j - i);
            if (solve(board, i + 1, restrictedColumns, restictedDiagonalPlus, restictedDiagonalMinus, noOfQueens)) return true;
        }
        board[i][j] = E;
        noOfQueens -= 1;
        restrictedColumns.remove(j);
        restictedDiagonalPlus.remove(i + j)
        restictedDiagonalMinus.remove(j - i);
    
    }

}



function printBoard(board)
{
    let str = "";
    for (let i = 0; i < board.length; i++)
    {
        for (let j = 0; j < board.length; j++) str = str + board[i][j] + " ";
        str = str + "\n";
    }
    console.log(str);
}

function main(board)
{
    solve(board, 0, restrictedColumns, restictedDiagonalMinus, restictedDiagonalPlus);
    printBoard(board);
}
main(generateEmpty(5));