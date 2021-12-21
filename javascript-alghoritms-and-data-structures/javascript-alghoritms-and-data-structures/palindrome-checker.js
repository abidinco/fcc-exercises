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