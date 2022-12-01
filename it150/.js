//specify global variable for empty
const E = -1;

function hasLegalElements(puzzle) {
    // checks if all symbols are 0, 1, or empty

    // returns trus/false
}

function isLegalSize(puzzle) {
    // check: 
    // if number of rows/cols is divisible by 2
    // if number of rows/cols greater than 4
    // if each row has the same length

    //returns true/false
}

function checkThreeInARowRow(puzzle) {
    // checks the 2D array horizontally if it has 3 elements in a row 
    // (check only '0s and 1's)

    // returns true/false 
}

function checkThreeInARowCol(puzzle) {
    // checks the 2D array verically if it has 3 elements in a row 
    // (check only '0s and 1's)

    // returns true/false 
}

function checkNoOfNumbersRow(puzzle) {
    // checks if all rows have at most noOfRows/2 0s and 1s
    // returns true/false
}

function checkNoOfNumbersCol(puzzle) {
    // checks if all cols have at most noOfCols/2 0s and 1s
    // returns true/false
}

function isLegal(puzzle) {
    // this will perform all validity checks
    // returns true/false
}

function isSolved(puzzle) {
    // check if the puzzle is legal, and does not contain empty

    // returns true/false
}


// solver

// for the solver, implement similar functions, but they will fill
// elements according to the rules

function fillThreeInARowRow(puzzle) {
    // fill elements so that we don't have 3 in a row 

    // returns nothing, changes the puzzle
}


function fillThreeInARowCol(puzzle) {
    // fill elements so that we don't have 3 in a row 

    // returns nothing, changes the puzzle
}

function fillByNumberOfElementsRows(puzzle) {
    // if 0s or 1s are completed (==length/2),
    //the empties will be filled with the other
    // returns nothing, changes the puzzle
}

function fillByNumberOfElementsCols(puzzle) {
    // if 0s or 1s are completed (==length/2),
    //the empties will be filled with the other
    // returns nothing, changes the puzzle
}

function copy(puzzle) {
    // returs a deep copy of a puzzle (copy element by element)
}

function areEqual(puzzle1, puzzle2) {
    // returns true if the two puzzles 
    // are equal (i.e., contain the same elements), false otherwise
}

function solve(puzzle) {
    let puzzle2 = copy(puzzle);
    while (true) {
        fillThreeInARowRow(puzzle);
        fillThreeInARowCol(puzzle);
        fillByNumberOfElementsRows(puzzle);
        fillByNumberOfElementsCols(puzzle);
        if (!isLegal(puzzle)) {
            return false;
        }
        if (isSolved(puzzle)) {
            return true;
        }
        if (areEqual(puzzle, puzzle2)) {
            // this is to prevent infinite loop 
            // if our solver cannot solve the puzzle
            // Here, expand with backtracking (bonus!!)
            return false;
        }
        if (!areEqual(puzzle, puzzle2)) {
            puzzle2 = copy(puzzle);
        }
    }
}

// helper functions

function printPuzzle(puzzle) {
    // prints a puzzle in a nice way 
}


function main() {
    let test1 = [
        [0, 0, 1, E],
        [1, E, E, 1],
        [1, E, 1, 0],
        [1, 0, 0, 1]
    ]; // illegal, first col
    console.log(isLegal(test1));
    let test2 = []; // fill your own

    let test3 = []; // find an example from e.g., https://www.20minutes.fr/services/takuzu, fill some key numbers if your solver cannot solve
    console.log(solve(test3));
    printPuzzle(test3);
}


main();
