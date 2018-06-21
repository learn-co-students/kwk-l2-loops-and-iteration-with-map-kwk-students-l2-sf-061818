const names = []
function lowerCaseStudentNames(list) {
  return list.map(function (student) {
    return student.toLowerCase();
  });
}
lowerCaseStudentNames(names);

const students = ['Mary Cassatt', 'Joan Mitchell', 'Eva Hesse', 'Frida Kahlo', 'Taylor Swift', 'Agnes Martin'];
function nameToAttributes(list) {
  return list.map(function (split) {
    s = split.split(" ");
    o = {
      firstName : s[0],
      lastName : s[1]
    }
    return o
  })
}
nameToAttributes(students);

function attributestoPhrase(student) {
  return student.map(function (student) {
    return `${student.name} is from ${student.hometown}`;
  });
}
attributestoPhrase([{name: 'Mary',   hometown: 'Allegheny'  },
  { name: 'Joan',   hometown: 'Chicago'    },
  { name: 'Eva',   hometown: 'Hamburg'   },
  { name: 'Frida', hometown: 'Coyoacán' },
  { name: 'Taylor',   hometown: 'Reading' }])