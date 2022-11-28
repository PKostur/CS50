/*Function that prints a pascal triangle aka each number is equal to the one on top plus the one on top-left
let input = prompt("How many pascal rows? ");

function pascal(n){

    jeff = new Array(n);

    for (let i = 0; i < n; i++) {
        jeff[i] = new Array(i);
        for (let j = 0; j < n; j++) {
            jeff[i][j] = 0;
        }
    }
    for (let i = 0; i < n; i++) {
        jeff[i][0] = 1;    
    }

    for (let i = 1; i < n; i++) {

        for (let j = 1; j < n; j++) {
            jeff[i][j] = jeff[i - 1][j] + jeff[i - 1][j - 1]
        }
    }
    
    return jeff;
}
console.log(pascal(input));
*/

/* Recursion
let in1 = prompt("I need one nubmer: ");
let in2 = prompt("To the power of : ")



function pow(x, n)
{
    if (n == 0) return 1;
    return x * pow(x, n - 1);
}
console.log(pow(in1, in2));


let nums = [1, 2, 4, 6, 8];

function verArray(arr, pos)
{   
    if (pos == arr.length) {
        return;
    }
    console.log(arr[pos]);

    verArray(arr, pos + 1)

}
verArray(nums, 0);


let nums = [1, 2, 4, 6, 8];

function prVerRev(arr, pos)
{
    if (pos == arr.length) return;
    
    prVerRev(arr, pos + 1)
    console.log(arr[pos])   
}
prVerRev(nums, 0)
*/

/*
let number = prompt("Give me a number: ")

function factorial(x)
{
    if (x == 0) return 1;
    return x * factorial(x - 1);
}   
console.log(factorial(number));

*/

/* Checks if the string is a palindrome
let word;

function isPalindrome(string) 
{
    for(let i = 0; i < string.length / 2; i++)
    {
        if (string[i] != string[word.length - i - 1])
        {
            return false;
        }

    } return true;
}

while (true)
{
    word = prompt("Please write a string: ");
    if (word.length == 0)
    {
        console.log("bye!");
        break;
    }

    isPalindrome(word) ? console.log("palindrome") : console.log("not one");
}
*/

/* Rock Paper Scissors Game
let cchoice = "RPSRPSSRPPRSPPSRPSPPRRS";
let cletter;
let pchoice;
let i=0;

while (true) {
    console.log("Let's play rock-paper-scissors!");
    pchoice = prompt("Make your move: ");

    if (pchoice.length != 1) {
        alert("'_'");
        break;
    }

    if (pchoice != "R" && pchoice != "P" && pchoice != "S") {
        alert("Wrong move, play again!");
        continue;
    }

    let ctemp = cchoice[i % cchoice.length];

    if (pchoice == ctemp) 
    {
        alert("The computer chose " + ctemp + " it's a tie!");       
    }
    else if ((pchoice == "P" && ctemp == "R") || (pchoice == "R" && ctemp == "S") || (pchoice == "S" && ctemp == "P")) {
        alert("The computer chose " + ctemp + " you win!")       
    }
    else {
        alert("The computer chose " + ctemp + " you lose!")       
    }
    i++;
}
*/

/*A function that prints n rows of a floyd triangle
function floyd(n)
{
    let str = "";
    let num = 1;
    for (let i = 1; i <= n; i++)
    {
        for (let r = 0; r < n - i; r++ )
        {
            str += "\t";
        }
        for (let k = 0; k < i; k++)
        {
            
            str = str + num + "\t";
            num++;
        }
        str += "\n"; 
    }
    return str;
}


console.log(floyd(prompt("Give me a number of rows: ")));
*/

/*


console.log(nums, nums.length);


let i;
let a = -Infinity;

for (i = 0; i <= nums.length; i++) 
{
    if (nums[i] > a)
    {
        a = nums[i];
    }
} 


function maxElement(nums)
{
    let i;
    let a = -Infinity;

    for (i = 0; i <= nums.length; i++) 
    {
        if (nums[i] > a)
        {
        a = nums[i];
        }
    } 
    return a; 
}
console.log(maxElement(nums));


function allElements(nums) 
{
    let i;
    for (i = 0; i <= nums.length; i++) {
        new_nums[i] = nums[i];
        return 
    }
}
console.log(maxElement(nums), allElements(nums));



let nums = [1, 7, 3, 4, 5];


function maxPositionFrom(nums, start)  // start = 3
{   
    let max = start;
    
    for (let i = start; i < nums.length; i++)
    {
        if (nums[i] > nums[max]) {
            max = i;

        }
    
   }    return max;
}
console.log(maxPositionFrom(nums, 1));


/* Prime function
function isPrime(x) {
    for(let y = 2; y < x; y++) {
        if (x % y == 0) {
            return false;
        } 
    }  
    return true; 
}



function showPrime(a) {
    for(let i = 1; i <= a; i++) {
        if(isPrime(i)) {
            console.log(i);
             
        }    
    }
}

console.log(showPrime(prompt("Give me a number: ")));





let nums = [1, 7, 10, 4, 5];

function calcSum(){};

console.log(calcSum(nums));

function calcSum(num) 
{   
    let temp = 0;
    for (let i = 0; i < num.length; i++)
    {
        temp += num[i];
    }
  
    return temp;    
}
*/
/*
let nums = [1, 2, 3, 4, 5];

function arrSearch(array, element)
{
    for (let i = 0, n = array.length; i < n; i++)
    {
        if (array[i] == element) 
        {
            return true;
        }

    } 
    return false;
}

let l = prompt("What number do I check for?")

console.log(arrSearch(nums,  l));


function findIndex(array, element)
{
    n = array.length
    for (let i = 0; i < n; i++)
    {
        if (array[i] == element) 
        {
            return i;
        }

    } 
    return -1;
}

console.log(findIndex(nums,  l));

let nums = [1, 2, 3, 4, 3,  2, 1];

function chkPal(arr)
{
    let h = arr.length / 2;
    for (let i = 0; i < h; i++)
    {
        if (arr[i] != arr[arr.length - 1 - i])
        {
            return false;
        }
    } 
    return true;
}
alert(chkPal(nums));


function half(arr, num)
{
    let mid = arr.length;
    if (num > arr[mid / 2])
    {
        new_arr = arr.slice(mid, arr.length - 1)
        return half(new_arr, num);
    }

}
console.log(half(nums, 4))




*/