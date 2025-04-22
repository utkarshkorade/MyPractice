const arr = [10, 20, 30, 40, 50, 70, 90];

// Calculate the sum of all elements
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the average
const average = sum / arr.length;

console.log(average);