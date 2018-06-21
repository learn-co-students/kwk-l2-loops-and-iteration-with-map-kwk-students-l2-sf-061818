// Code your solution in this file.
let studentNames = []
function lowerCaseStudentNames(names) {
  for (var counter = 0; counter < names.length; counter++) {
  var name = names[counter];
  studentNames.push(name.toLowerCase())
  }
  return studentNames
}

const hi = []
function splitFunction(full){
  full = full.split(" ")
  full = {firstName: full[0],  lastName: full[1]}
  hi.push(full)
}
function nameToAttributes(students){
  students.map(splitFunction)
  return hi
}
let from = [];
function sentenceMaker(object){
   from.push(`${object.name} is from ${object.hometown}`);
}
function attributesToPhrase(array){
  array.map(sentenceMaker);
  return from;
}