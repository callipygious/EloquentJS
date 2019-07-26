/* Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster? */

let reverseArray = function (arr) {
  let newArr = [];
  for (let ele of arr) {
    newArr.unshift(ele);
  }
  return newArr;
}

/*
let reverseArrayInPlace = function (arr) {
  for (let n = 0; n <= length.arr; n++) {
    let wal = arr.pop();
    arr.unshift(wal);
}}
 THis was trash and doesnt work. Cheated and read answer for this. */

 function reverseArrayInPlace (arr) { //just copying the answer from website, adding comments to help understand
   for (let i = 0; i < Math.floor(arr.length / 2); i++) { //Loop iterates thru the first half of the array (length/2 is half the elements, math floor rounds down for odd #s since middle element doesnt move anyway.)
     let old = arr[i]; //this acts as a register for saving the lefthand element in the array  (starting with first(0th) element (i))
     arr [i] = arr [arr.length - 1 - i]; //Replaces the ith element in the array with its "opposite" from the second half of the array. i.e. first element becomes the last, 2nd becomes 2nd last, etc
     arr [arr.length - 1 - i] = old; //Replaces the 2nd-half-mirror value with the saved original 1st-half value, completing a successful flip for the corresponding elements in this iteration of the loop. length-1 takes into account the element count starting at 0, then subtracting i moves to the specific element that is the flipped partner for the ith element in the first half.
 }
 return arr;
 }
