// Code your solution in this file.


function lowerCaseStudentNames(students) {
  let apple = []
  for (i = 0; i < students.length; i++) {
    apple[i] = students[i].toLowerCase();
  }
  return apple
}

function nameToAttributes(name) {
  let newPerson = [];
  let names_2 = []
  for (i = 0; i < name.length; i++) {
    names_2 = name[i].split(" ")
    newPerson.push({ firstName: names_2[0], lastName: names_2[1]})
  }
  return newPerson
}
function attributesToPhrase(students) {
  let result = []
  for (i = 0; i < students.length; i++) {
    result[i] = `${students[i]['name']} is from ${students[i]['hometown']}`

  }
  return result
}