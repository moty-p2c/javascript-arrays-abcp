let chocolateBars = ["snickers" ,"hundred grand" ,"kitkat" ,"skittles"]

function addElementToBeginningOfArray (array ,element){
  let newArray = [element, ...array]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array ,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array ,element){
  let newArray= [...array,element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array ,element){
  array = [...array, element]
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function 