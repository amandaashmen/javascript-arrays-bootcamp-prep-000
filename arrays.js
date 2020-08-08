var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, add) {
  return [add, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, add) {
  array = [add, ...array]
  return array
}

function addElementToEndOfArray(array, add) {
  return [...array, add]
}

function destructivelyAddElementToEndOfArray(array, add) {
  array = [...array, add]
  return array
}

function accessElementArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.unshift()
}

function removeElementFromEndOfArray(array) {
  return iceCreams.slice(0, iceCreams.length -1)
}
