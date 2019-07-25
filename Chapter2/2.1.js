/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.    */

let triangle = ""
while (triangle.length < 7)   //<=7 made it run an extra time
  {triangle += "#";
  console.log(triangle);
  }
