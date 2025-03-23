// Problem 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Problem 2
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

// Problem 3
let userInput;
do {
  userInput = parseInt(prompt("Enter a number greater than 10:"), 10);
} while (userInput <= 10);
console.log("Valid input received:", userInput);

// Problem 4
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Problem 5
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Problem 6
let numbers1 = [3, 7, 12, 5, 9];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] === 12) {
    console.log("Number 12 found, stopping the loop.");
    break;
  }
  console.log(numbers1[i]);
}

// Problem 7
let numbers2 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] === 5) {
    continue;
  }
  console.log(numbers2[i]);
}
