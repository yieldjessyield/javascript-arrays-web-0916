// var ingredient1 = "bread"
// var ingredient2 = "mild cheese"
// var ingredient3 = "sharp cheese"
// var ingredient4 = "butter"
// var ingredient5 = "tomato"
// var ingredient6 = "garlic"


// var grilledCheeseIngredients = [
//   'bread',
//   'mild cheese',
//   'sharp cheese',
//   'butter',
//   'tomato',
//   'garlic'
// ]

// var tomatoSauceIngredients = [
//   'tomato',
//   'garlic',
//   'olive oil',
//   'basil',
//   'oregano'
// ]


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}


function removeElementFromBeginningOfArray(array){
  index = 0
  array.splice(index, 1)
  return array
}

function removeElementFromEndOfArray(array){
  var index = array.length
  index = index - 1
  array.splice(index, 1)
  return array
}

