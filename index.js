// Code your solution in this file
let studentNames = []
function lowerCaseStudentNames(names) {
  for (var counter = 0; counter < names.length; counter++) {
  var name = names[counter];
  studentNames.push(name.toLowerCase())
  }
  return studentNames
}

let separation = []
var fullNames = ['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman']
function splitFunction(students) {
  students = students.split(" ")
  students = {
    firstName:students[0],
    lastName:students[1]
  }
  separation.push(students)
}
function nameToAttributes(name) {
  name.map(splitFunction)
  return separation
}

let from = [];
function sentenceMaker(object){
   from.push(`${object.name} is from ${object.hometown}`);
}
function attributesToPhrase(array){
  array.map(sentenceMaker);
  return from;
}

