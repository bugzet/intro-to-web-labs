let numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even_sum = 0

for (let i = 0; i < numbers_array.length; i++) {
  console.log("Current number:", numbers_array[i])
  if (numbers_array[i] % 2 === 0) {
    even_sum += numbers_array[i]
  }
}

console.log("Total sum of even numbers:", even_sum)
