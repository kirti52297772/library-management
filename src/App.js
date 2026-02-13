import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "S. Scott Fitzgerald",
    },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (title.trim() === "" || author.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="form-row">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input"
          />

          <button onClick={addBook} className="add-btn">
            Add Book
          </button>
        </div>
      </div>

      {filteredBooks.map((book) => (
        <div key={book.id} className="book-card">
          <div>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
          </div>
          <button
            onClick={() => removeBook(book.id)}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
