/*  Retry

Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.

Make sure you handle only the exceptions you are trying to handle.  */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(x, y) {
  try {
    primitiveMultiply(x, y)
  }
  catch(prob) {
    if (prob instanceof MultiplicatorUnitFailure) {
      // Cant think of how to make this try again
    }
    else {
      throw prob
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64

//Book answer:
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {  //Used this non-terminating for loop to make sure the multiplication keeps trying til it works
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) //Rather than create a specific case for the multiplication failure, the catch isolates it and throws everything else instead. This allows the loop to continue when this specific error occurs!
        throw e;
    }
  }
}
