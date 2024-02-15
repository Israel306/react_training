/*
// Functions
function CalcAge(year) {
  const current_year = new Date().getFullYear();
  return current_year - year;
}
calc = CalcAge(2015);
console.log(calc);

// arrow functions
const CalcAge2 = (year) => new Date().getFullYear() - year;
console.log(CalcAge2(2005));

// If Else statement

let interesting = 25;
let mindblowing = 0;

if (interesting === mindblowing) {
  console.log("interesting and mindblowing");
} else if (interesting > mindblowing) {
  console.log("interesting");
} else console.log("mindblowing");

// falsy values - 0, null,  undefined, false and Nan
if (mindblowing) {
  console.log("Its mind blowing");
} else console.log("Not Mind blowing");

// Ternary operator
const message = interesting > mindblowing ? "fact correct" : "fact wrong";
//alert(message);

// working with string- back tick ``
const myname = "Israel";
const age = 23;
console.log(
  `My name is ${myname}, and i am ${CalcAge(2001)} years old. \n ${
    CalcAge(2001) === age ? "True fact" : "Wrong Fact"
  }`
);


// Arrays
const name = ["Israel", "Joy", "Love"];
const addName = [...name, "Victor"];
const [Programmer, UI, Manager] = name;

console.log(UI, Programmer);
console.log(addName);

// Object
const factobj = {
  name: "Ayo",
  occupation: "student",
  income: "$3000",
  // creating method in object
  createSummary: function () {
    return `My name is ${this.name}, I am a ${this.occupation} of Anchor Uni and my annual income is ${this.income}`;
  },
};
console.log(factobj.income);
console.log(factobj.createSummary());


// looping over arrays foreach and map using function

[2, 3, 4].forEach((element) => {
  console.log(element * 10);
});

const num = [6, 7, 8].map((el) => el * 10);
console.log(num);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const calAge = (year) => new Date().getFullYear() - year;
console.log(calAge(2001));

const factAge = initialFacts.map((el) => calAge(el.createdIn));
console.log(factAge);
*/
