// Code your solution in this file.

const newArray = []
function lowerCase(strings){
  strings = strings.toLowerCase()
  newArray.push(strings)
}
function lowerCaseStudentNames(array){
  array.map(lowerCase)
  return newArray
}
const nameTitles = []
function objecter(name){
  name = name.split(" ")
  name = { firstName: name[0], lastName: name[1]}
  nameTitles.push(name)
  
}
function nameToAttributes(array){
  array.map(objecter)  
  return nameTitles
}
let random = []
function dividing(spot){
  random.push(`${spot.name} is from ${spot.hometown}`)
}
function attributesToPhrase(array){
  array.map(dividing)
  return random
}