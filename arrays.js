var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, add) {
  return [add, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, add) {
  array.unshift(add)
  return array
}

function addElementToEndOfArray(array, add) {
  return [...array, add]
}

function destructivelyAddElementToEndOfArray(array, add) {
  array.push(add)
  return array
}

function accessElementArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.unshift()
  return array
}

function removeElementFromEndOfArray(array) {
  return iceCreams.slice(0, iceCreams.length -1)
}
