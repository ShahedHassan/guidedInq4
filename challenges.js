// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

let Input = [1.5, 3, 2.5, 1];

function average(array){
    let total = array.reduce((a,b) => a + b, 0); 
    //reduce goes through array item by item, adding current to
    //past result in the last step
    return total / array.length; //gets the total of all the items and divides by how many are in the array
}
console.log(average(Input));

// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
// beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on 
// Arrays to aid in working through this problem. 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.

//sudo codeeee
//declare a variable of an array of numbers
//then use variable.indexOf method to look for certain number in the array
//console log it
//show another example of the same array rearranged

let nums = [1,2,3,4,5];
let indx = nums.indexOf(3);

console.log(indx);

let nums2 = [2,1,4,5,3];
let indx2 = nums2.indexOf(5);

console.log(indx2);

//Hard- PLEASE SEE HTML PAGE!!


// *VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
// and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note: You may assume that you have an infinite number of each kind of coin


//coin <= amount
//amount - coins = index
//then if coin is <= the amount
//the table [index] + 1 = potentialAmount
//table[i] = min(table[i], potentialAmount)


let coins = [1,3,5,10]
let amount = 25

let coinChange = function(coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);//+1 for the 0 index
    table[0] = 0; //fills in value for the 0 index
    
    for(let coin of coins) { //i represents the amount
        for(let i = 0; i < table.length; i++) {
            if(coin <= i) {
                let idx = i - coin;
                let potentialAmount = table[idx] + 1;
                table[i] = Math.min(potentialAmount, table[i]);
            }
        }
    }
    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};
