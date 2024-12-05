const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = this.read === 'Yes' ? 'No' : 'Yes';
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook); // Add the new book to the array
    displayLibrary(); // Update the display
}

function displayLibrary() {
    const libraryContainer = document.getElementById('library'); // Get the library container
    libraryContainer.innerHTML = ''; // Clear existing content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        // Add book details
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>  
            <p><strong>Read:</strong> ${book.read}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleRead(${index})">Toggle Read</button>
        `;

        libraryContainer.appendChild(bookCard); // Adding the details to the book card.
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1); // Remove the book from the array
    displayLibrary();
     // Update the display
}

// Toggle the read status of a book
function toggleRead(index) {
    myLibrary[index].toggleReadStatus(); // Call the prototype method
    displayLibrary(); // Update the display
}

// Handle form submission
document.getElementById('addBookForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents form from reloading the page
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, read);

    e.target.reset(); // Clears Form input
});

// Add books manually for testing
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 304, 'No');
addBookToLibrary('1984', 'George Orwell', 328, 'Yes');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'No');