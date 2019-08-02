/* Dominant writing direction

Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here. */

//Earlier functions from chapter:

//Count By takes a collection of items and a function that computes a group name for a given element, returning an array of objects each of which names a group and tells number of elements found in the group.
function countBy(items, groupName) { 
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

//character script returns the corresponding script for a given character code.
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

//so mimicking textScripts from chapter:
function dominantDirection (text) {
    let directions = countBy(text, char => {  //An array listing all characters' direction property
	let script = characterScript(char.codePointAt(0));  //runs CountBy each caracter in the text
	return script ? script.direction : "none";  //characterscript grabs the script object for each character,
	//Returns the direction for each, and none where there isnt any.
    }).filter(({direction}) => direction != "none");  //Filters out directionless characters

   let total = directions.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No directions found.";
    //tallies up all the directions  

    
   /* return directions.map(({direction, count}) => {
	return `${Math.round(count*100 / total)}% ${direction}`;
    }).join(", "); //Prints out the percentage of each direction in the text. The math works out but the names are undefined...   */

    
    directions.map(({direction, count}) => {
	let percent = Math.round(count*100/total)
	if (percent >=50) {
	    return `${direction}`; 
	}})} //I think this is gibberish. Even changing all the "direction" labels to "name" in order to access the countBy properties is still giving undefined, because this math is incorrect and the function is not retunring anything. Either the map or the 'total' definition, or both.

//No clue why it is returning the direction names as undefined no matter what i do. Thought using the literal syntax would do it but nope...
//I realize now that countBy saves the filtered group name as a "name" property, in this case the name is the direction.

//Official answer:

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none"; //returns the directions 
  }).filter(({name}) => name != "none"); 

  if (counted.length == 0) return "ltr";  //I guess the default is left to right

  return counted.reduce((a, b) => a.count > b.count ? a : b).name; //whichever was the greatest value counted in the countBy function is returned.
}
