/*  FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)  */

//Part 1
for (num=1; num <=100; num++) {
    if (num%3 == 0)
      {console.log("Fizz")}
    else if (num % 5 == 0 && num % 3 !== 0)
      {console.log("Buzz")}
    else {
      console.log(num)
    }

}

// Part 2: Simple
for (num=1; num <=100; num++) {
    if (num%3 == 0 && num % 5 == 0) {
      console.log("FizzBuzz")
    }
    else if (num%3 == 0)
      {console.log("Fizz")}
    else if (num % 5 == 0)
      {console.log("Buzz")}
    else {
      console.log(num)
    }

}

//Part 3: Clever
for (num=1; num <=100; num++) {
  let display = "";
  if (num %3 == 0) {
    display = display + "Fizz";
  }
  else if (num %5 == 0) {
    display = display + "Buzz";
  }
  else if (!display) {
    display = num;
  }
  console.log(display)
}
