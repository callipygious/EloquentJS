/*  Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. */

let arrays = [[1, 2, 3], [4, 5], [6]];
let flatten = function (array) {
  let flat = [];
  for (ele of array) {
      flat.concat(array.reduce((x) => {
	  for (ele of x) {
	      return ele;
	  }}
	  ,0)
		 ) }
    return flat ;}

console.log(flatten(arrays));

//^ "x is not iterable" doesnt work at all. Cheating, answer from site:

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), [])); //Starts with a new empty array, concats the "current" value onto it as it moves thru the array using reduce on each item.
