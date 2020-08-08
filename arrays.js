var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, add) {
  return [add, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, add) {
  return array.unshift(add)
}

function addElementToEndOfArray(array, add) {
  return [...array, add]
}

function destructivelyAddElementToEndOfArray(array, add) {
  return array.shift(add)
}

function accessElementArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementToBeginningOfArray(array, add) {
  return array.shift()
}