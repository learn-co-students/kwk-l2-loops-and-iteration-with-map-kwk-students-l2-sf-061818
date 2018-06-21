let studentNames = []
function lowerCaseStudentNames(names) {
  for (var counter = 0; counter < names.length; counter++) {
  var name = names[counter];
  studentNames.push(name.toLowerCase())
  }
  return studentNames
}

let studentNamesObject = {}
let studentNamesArray = []

function split (word) {
  return word.split(" ")
}

let name1 = []

function alter(thing) {
  thing = thing.split(" ")
  thing = {firstName: thing[0], lastName: thing[1]}
  studentNamesArray.push(thing)
}

function nameToAttributes(names) {
  names.map(alter)
  return studentNamesArray}

let namesArray = []
let stringName = ""

function change(x) {
  stringName = x.name + " is from " + x.hometown
  namesArray.push(stringName)
}

function attributesToPhrase(attributes) {
  attributes.map(change)
  return namesArray
}
  