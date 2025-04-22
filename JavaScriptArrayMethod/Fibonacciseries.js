//  // Function to generate Fibonacci sequence up to n terms without using an array
//  const fibonacciSequence = (n) => {
//     // Edge case: Return empty string for n <= 0
//     if (n <= 0) {
//         return '';
//     }

//     let result = '0'; // Start with the first Fibonacci number
//     let prev = 0;
//     let current = 1;

//     // Generate Fibonacci sequence
//     for (let i = 1; i < n; i++) {
//         let nextFib = prev + current;
//         result += ','+nextFib;
//         prev = current;
//         current = nextFib;

//         // console.log(result);
//     }

//     return result;
// }

// // Example: Generate Fibonacci sequence up to 10 terms
// let numTerms = 10;
// let fibonacciSequenceResult = fibonacciSequence(numTerms);

// // Display the result
// // document.write("Fibonacci sequence up to " + numTerms + " terms: " + fibonacciSequenceResult);

// console.log("Fibonacci sequence up to " + numTerms + " terms: " + fibonacciSequenceResult);

// /*
// // Function to generate Fibonacci sequence up to n terms without using an array
//         const fibonacciSequence = (n) => {
//             // Edge case: Return empty string for n <= 0
//             if (n <= 0) {
//                 return '';
//             }

//             let result = '0'; // Start with the first Fibonacci number
//             let prev = 0;
//             let current = 1;

//             // Generate Fibonacci sequence
//             for (let i = 1; i < n; i++) {
//                 let nextFib = prev + current;
//                 result += ', ' + nextFib;
//                 prev = current;
//                 current = nextFib;
//             }

//             return result;
//         }

//         // Example: Generate Fibonacci sequence up to 10 terms
//         let numTerms = 10;
//         let fibonacciSequenceResult = fibonacciSequence(numTerms);

//         // Display the result
//         document.write("<p>Fibonacci sequence up to " + numTerms + " terms: " + fibonacciSequenceResult + "</p>");
// */
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Get input from the user
const number = parseInt(prompt("Enter a number: "));
console.log(`Factorial of ${number} is: ${factorial(number)}`);
