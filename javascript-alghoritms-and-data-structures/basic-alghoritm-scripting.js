// Reverse a String
function reverseString(str) {
  let arr = [...str]
  let result = ""
  for(let i=1;i<=arr.length;i++) {
    result += arr[arr.length-i]
  }
  return result
}

reverseString("hello");

// Factorialize a Number
function factorialize(num) {
  if(num === 0) return 1
  let result = num * factorialize(num-1)
  return result;
}

factorialize(5);

// Find the Longest Word in a String
function findLongestWordLength(str) {
  let arr = str.split(" ").map((letter) => letter.length)
  return Math.max(...arr)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Array
function largestOfFour(arr) {
  let result = [];
  arr.map((arrFour) => result.push(Math.max(...arrFour)))
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length-target.length,) === target
}

confirmEnding("Bastian", "n");

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  if(num <= 0) return ""
  if(num === 1) return str
  return str += repeatStringNumTimes(str, num-1)
}

repeatStringNumTimes("abc", 3);

// Truncate a String
function truncateString(str, num) {
  if(str.length <= num) return str
  return str.slice(0,num) + "..."
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// Finders Keepers
function findElement(arr, func) {
  let num = undefined;
  for(let i=0;i<arr.length;i++) {
    if(func(arr[i])) {num = arr[i]; break}
  }
  return num;
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let returnArr = [];
  for(let i=0;i<arr.length;i+size) {
    returnArr.push(arr.splice(0, size))
  }
  return returnArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);