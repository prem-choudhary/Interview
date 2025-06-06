let name1 = "Prem choudhary";
let bag = " ";
for (let i = 0; i < name1.length; i++) {
  bag = bag + name1[i];
  if (i != 2) {
    bag = bag + name1[i];
  } else {
    bag = bag + "";
  }
}
console.log(bag);