// Code your solution in this file.

const lowerArray = [];

function lower(arr) {
  arr = arr.toLowerCase();
  lowerArray.push(arr);
}

function lowerCaseStudentNames(students) {
  students.map(lower);
  return lowerArray;
}

const splitArray = [];

function nameToAttributes(fullNames) {
  fullNames.map(split);
  return splitArray;
}

function split(full) {
    full = full.split(" ");
    var name = {
      firstName: full[0],
      lastName: full[1],
    }
    splitArray.push(name)
}

const attArray = [];

function attributesToPhrase(objects) {
  objects.map(attributes);
  return attArray;
}

function attributes(nameAndPlace) {
  var name = nameAndPlace.name;
  var hometown = nameAndPlace.hometown;
  var str = name + " is from " + hometown;
  attArray.push(str);
}



