/* Everything

Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method. */

function everyLoop (array, funct) {
    for (let c of array) {
	if (!funct(c)) {
	    return false;
	}
    }
    return true;
}

function everySome (array, funct) {
    return (!array.some((n)=>!funct(n)));
}

//I'm going to start including the official solutions in addition to my attempts, to compare during later review:
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
