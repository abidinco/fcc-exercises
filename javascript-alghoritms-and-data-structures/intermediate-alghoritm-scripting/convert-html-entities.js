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