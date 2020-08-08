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

function destructivelyRemoveElementFromBeginningOfArray(array, add) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array, add) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array, add) {
  return array.unshift()
}
