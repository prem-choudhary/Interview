// const programs = (el) => {
//   return el * 10
// };
// console.log(programs());
// console.log("prem")

// const student = [{ fName: "prem" }, { lastName: "choudhary" }];
// // const cool = (fName , lastName)
// student.forEach((student) => {
//   const fullName = `${student.fName} ${student.lastName}`;
//   console.log(fullName);
// });

// makeABaby();
// console.log(makeABaby)

const students = [{ fName: "prem", lastName: "choudhary" }];

const studentsWithFullName = students.map((student) => {
  return { fullName: `${student.fName} ${student.lastName}` };
});

console.log(studentsWithFullName);

const persons = [
  {
    firstName: "prem",
    lastName: "chaudhary",
    age: 22,
    getFullName: function () {
      return `${this.firstName} ${this.lastName} `;
    },
  },
  {
    firstName: "rahul",
    lastName: "chaudhary",
    age: 41,
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "mak",
    lastName: "chaudhary",
    age: 25,
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "papu",
    lastName: "chaudhary",
    age: 70,
    getFullName: function () {
      return `${this.firstName} ${this.lastName} ${this.age}`;
    },
  },
];

persons.forEach((person) => {
  console.log(person.getFullName());
});

// console.log(students);
