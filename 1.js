/*Double Each Number
● Problem: Given an array of numbers, return a new array where each number is doubled.
Input: [1, 2, 3, 4]
Expected Output: [2, 4, 6, 8] */


//var x=[1,2,3,4]
//var y=x.map(num=>num*2)
//console.log(y)



var X=[1,2,3,4];
var y=X.map(function(element,index) {
    var z= element *2;
    return z;
});
console.log(y);