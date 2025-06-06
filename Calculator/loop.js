let name = "Premnchoudhary";
let jhola = " ";

for (let i = 0; i < name.length; i++) {
//   jhola += name[i] + " ";
  if (i == 0) {
    jhola = jhola + "A"
    } else if (i == 1) {
  } else {
    jhola = jhola + name[i] + " ";
  }
}
console.log(jhola);
