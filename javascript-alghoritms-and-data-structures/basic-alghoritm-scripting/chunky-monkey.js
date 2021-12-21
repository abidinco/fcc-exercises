function chunkArrayInGroups(arr, size) {
  let returnArr = [];
  for(let i=0;i<arr.length;i+size) {
    returnArr.push(arr.splice(0, size))
  }
  return returnArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);