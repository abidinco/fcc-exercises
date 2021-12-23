// Sum All Numbers in a Range

// Diff Two Arrays

// Seek and Destroy

// Wherefore art thou

// Spinal Tap Case

// Pig Latin

// Search and Replace
function myReplace(str, before, after) {
  let arr = str.split(" ")
  if(before === before.toLowerCase()) {
    arr[arr.indexOf(before)] = after.toLowerCase()
  } else {
    arr[arr.indexOf(before)] = after.charAt(0).toUpperCase() + after.slice(1,)
  }
  return arr.join(" ")
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// DNA Pairing
function pairElement(str) {
  let arr = [];
  [...str].map(function(item) {
    switch(item) {
      case 'A':
        arr.push([item, 'T']);
        break;
      case 'G':
        arr.push([item, 'C']);
        break;
      case 'C':
        arr.push([item, 'G']);
        break;
      case 'T':
        arr.push([item, 'A']);
        break;
    }
  })
  return arr;
}

pairElement("GCG");

// Missing Letters

// Sorted Union
function uniteUnique(array) {
  let returnArr = [];
  [...arguments].map((arr) => {
    arr.map((item) => {
      if(returnArr.indexOf(item) < 0) returnArr.push(item)
    })
  })
  return returnArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
function convertHTML(str) {
  let pairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  return str.replace(/[&<>"']/g, function(x) {
    return pairs[x]
  });
}

convertHTML("<>");

// Sum All Odd Fibonacci Numbers

// Sum All Primes

// Smallest Common Multiple

// Drop it

// Streamroller

// Binary Agents

// Everything Be True

// Arguments Optional

// Make a Person

// Map the Debris