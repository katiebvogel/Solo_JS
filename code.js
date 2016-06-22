var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// Step 1)  Iterate through the stringList and produce the following output:

//``Months listed are March, April, May.``

var i = 0
for(i = 0; i < stringList.length; i++){
  console.log("Months listed are " + stringList.join(', ') + ".");
}
//I realize that the join method doesn't require me to iterate through the
//elements of the stringList array.



//Step 2)  Console log the last element in numList using .length to find the last index


console.log(numList[numList.length - 1]);

//Step 3)  Iterate through numList, output all numbers as single String

for (i = 0; i < numList.length; i++) {
  console.log(numList.join(''));
}

//Step 4) Iterate through numList and add all of the elements together and console
//log the total
var mySum = 0;
for (i = 0; i < numList.length; i++) {
  mySum += numList[i];
}
console.log(mySum);

//Step 5) If the second element in boolList is true, log the sum of the first and last
//elements in numList. Otherwise multiply the second element in numList by itself
//and log the result.

if(boolList[1] === true) {
  console.log(numList[0] + numList[numList.length - 1]);
} else {
  console.log(numList[1] * numList[1]);
};

//Step 6) Iterate through boolList, if the value is true console log the equivelent
//index in numList.

for(i = 0; i< boolList.length; i++) {
  if(boolList[i] === true) {
    console.log(numList[i]);
  };
};

//Step 7) Combine all three arrays into one array, and log the newly created are
//in reverse.

var combinedArray = stringList.concat(numList, boolList);

console.log(combinedArray.reverse());
