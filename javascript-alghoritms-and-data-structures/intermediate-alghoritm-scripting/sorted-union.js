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