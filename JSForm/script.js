document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Submitted Information:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Age:</strong> ${age}</p>
    `
    ;
});
