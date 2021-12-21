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