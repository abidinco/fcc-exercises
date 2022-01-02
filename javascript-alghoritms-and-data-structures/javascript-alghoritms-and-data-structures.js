// Palindrome Checker
function palindrome(str) {
  // Filter by a-zA-Z0-9 and assign it to arr
  let arr = str.toLowerCase().match(/[a-zA-Z0-9]/gi)
  // Loop arr items until Math.floor(arr.length/2)
  for(let i=0;i<Math.floor(arr.length/2);i++) {
    // If first and last elements doesn't equal return false
    if(arr[i] !== arr.reverse()[i]) return false
  }
  return true
}

palindrome("eye");

// Roman Numeral Converter

function convertToRoman(num) {
  // Numbers to array
  let split = (num + "").split("");
  // Digits to variables
  let first = split[split.length-4] || undefined;
  let second = split[split.length-3] || undefined;
  let third = split[split.length-2] || undefined;
  let fourth = split[split.length-1];
  let result = "";
  // Fourth Digit
  if(fourth < 4) { result += "I".repeat(fourth) }
  else if(fourth == 4) { result += "IV" }
  else if(fourth < 9) { result += "V" + "I".repeat(fourth-5)}
  else if(fourth == 9) { result += "IX" }
  // Third Digit
  if(third < 4) { result = "X".repeat(third) + result }
  else if(third == 4) { result = "XL" + result }
  else if(third < 9) { result = "L" + "X".repeat(third-5) + result }
  else if(third == 9) { result = "XC" + result }
  // Second Digit
  if(second < 4) { result = "C".repeat(second) + result }
  else if(second == 4) { result = "CD" + result }
  else if(second < 9) { result = "D" + "C".repeat(second-5) + result }
  else if(second == 9) { result = "CM" + result }
  // First Digit
  if (first) { result = "M".repeat(first) + result}
  return result;
}

convertToRoman(2014);