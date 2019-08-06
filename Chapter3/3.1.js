/*
Minimum

The previous chapter introduced the standard function Math.min that returns
 its smallest argument. We can build something like that now. Write a function
 min that takes two arguments and returns their minimum.
*/

let min = function (first, second) {
  if (first > second) {
    return second;
  }
  else if (second > first) {
    return first;
  }
}

console.log( min (3, 4) )
