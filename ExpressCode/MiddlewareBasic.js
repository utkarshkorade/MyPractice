const express = require('express');
const app = express();

// Simple middleware function
function logger(req, res, next) {
    console.log(`Received a ${req.method} request for ${req.url}`);
    next(); // Pass control to the next middleware or route handler
}

// Use the logger middleware for all routes
app.use(logger);

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define another route
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start the server
app.listen(3007, () => {
    console.log('Server is running on port 3007');
});
