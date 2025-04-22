function addition(a, b) {
    return new Promise((resolve, reject) => {
        if (a === undefined || b === undefined) {
            reject("Some error happened");
        } else {
            resolve({massage:"success",sum:a+b}); // resolve function can give only one argument and second he ingnored thats why send as object
        }
    });
}

// Call addition with only one argument to trigger an error
const endresult = addition(10);

endresult
    .then((data) => {
        console.log(data.sum,data.massage); // This will not be called since there's an error
    })
    .catch((error) => {
        console.log(error); // This will log the error message
    });



/* this is code only for to see the how to send object
function addition(a, b) {
    return new Promise((resolve, reject) => {
        if (a === undefined || b === undefined) {
            reject("Some error happened");
        } else {
            resolve({ message: "success", sum: a + b });
        }
    });
}

// Call addition with both arguments to get the result
const endresult = addition(10, 90);

endresult
    .then((result) => {
        console.log(result.message, result.sum); // This will log "success" and the sum (100)
    })
    .catch((error) => {
        console.log(error); // This will log the error message
    });
 */