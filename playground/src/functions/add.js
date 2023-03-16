function add(a, b) {
  return a + b
}

function addAndMultiply(a, b, c) {
  return (a + b) * c
}

// (***) named export
module.exports = {
  add: add,
  addAndMultiply,
}
