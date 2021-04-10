// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

const ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions2();

// =======================================

const fivePlusSeven = function () {
  return 5 + 7;
};

console.log(fivePlusSeven());

const fivePlusSeven2 = () => 5 + 7;

console.log(fivePlusSeven2());

// =======================================

var myFunction = (a, b) => a + b;

console.log(myFunction(2, 3));

// =======================================

var addFive = (a) => a + 5;

console.log(addFive(3));

// =======================================

let test123 = { dag: "doei" };

console.log("123", test123);

let test456 = createObject0();

function createObject0() {
  return { greeting: "hoi" };
}

console.log("456", test456);

let createObject = () => ({ greeting: "hoi" });

let test789 = createObject();

console.log("789", test789);
