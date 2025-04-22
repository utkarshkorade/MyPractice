// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// let books = [
//     { id: 1, bookname: 'musafir', author: 'achyut godbole', year: 2012 },
//     { id: 2, bookname: '1984', author: 'aadesh kashid', year: 2025 }
// ];

// app.get('/books', (req, res) => {
//     res.json(books);
// });

// app.post('/post', (req, res) => {
//     const newbook = req.body;
//     const { bookname, author } = newbook;

//     // Validate the input
//     if (!bookname || !author) {
//         return res.status(400).json("Invalid Input..");
//     }

//     newbook.id = books.length + 1; // Assign a new ID
//     books.push(newbook); // Add the new book to the array
//     res.status(201).json(newbook); // Send a response with the new book
// }); 

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, bookname: 'musafir', author: 'achyut godbole', year: 2012 },
    { id: 2, bookname: '1984', author: 'aadesh kashid', year: 2025 }
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/post', (req, res) => {
    const newbook = req.body;
    const { bookname, author } = newbook;

    // Validate the input
    if (!bookname || !author) {
        return res.status(400).json("Invalid Input..");
    }

    newbook.id = books.length + 1; // Assign a new ID
    books.push(newbook); // Add the new book to the array
    res.status(201).json(newbook); // Send a response with the new book
});

// Add PUT endpoint to update a book by ID
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { bookname, author, year } = req.body;

    const book = books.find(b => b.id == id); 

    if (!book) {
        return res.status(404).json("Book not found..");
    }
      
    // Update the book details
    if (bookname) book.bookname = bookname;
    if (author) book.author = author;
    if (year) book.year = year;

    res.json(book); // Send the updated book
});

// Add DELETE endpoint to remove a book by ID
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    const bookIndex = books.findIndex(b => b.id == id);

    if (bookIndex === -1) {
        return res.status(404).json("Book not found..");
    }

    books.splice(bookIndex, 1); // Remove the book from the array
    res.status(204).send(); // Send a 204 No Content response
    

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


/* this is also good way to delete a book....
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    // Find the book to be deleted
    const book = books.find(b => b.id == id);

    if (!book) {
        return res.status(404).json("Book not found..");
    }

    // Filter out the book to be deleted
    books = books.filter(b => b.id != id);

    res.json(book); // Send the deleted book as a response
});
 */