const user = {
  username: "Prem",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);

function chai() {
  let username = "Prem";
  console.log(this.username);
}

chai();

var chai = function () {
  let username = "Prem";
  console.log(this.username);
};

var chai = () => {
  let username = "Prem";
  console.log(this);
};

chai();

var addTwo = (num1, num2) => {
  return num1 + num2;
};

var addTwo = (num1, num2) => num1 + num2;

var addTwo = (num1, num2) => num1 + num2;

var addTwo = (num1, num2) => ({ username: "Prem" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
