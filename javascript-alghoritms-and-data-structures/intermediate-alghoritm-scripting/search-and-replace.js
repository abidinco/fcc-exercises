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