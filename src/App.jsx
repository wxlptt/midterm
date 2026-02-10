import { useMemo, useState } from 'react'
import initialBooks from './data'
import './App.css'

const emptyForm = {
  title: '',
  author: '',
  coAuthor: '',
  coverImg: '',
  rating: '',
}

function getStars(rating) {
  const total = Math.max(0, Number(rating) || 0)
  return '⭐️ '.repeat(total).trim() || 'No rating'
}

export default function App() {
  const [books, setBooks] = useState(initialBooks)
  const [selectedBookId, setSelectedBookId] = useState(0)
  const [formData, setFormData] = useState(emptyForm)
const styles = {
    page: {
        background: "#0b0b0b",
        padding: 24,
    }
}
  const selectedBook = useMemo(
    () => books.find((book) => book.id === selectedBookId) ?? books[0],
    [books, selectedBookId],
  )

    const isAddDisabled = !formData.title.trim() || !formData.coverImg.trim()

  function handleFormChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleAddBook(event) {
    event.preventDefault()
    if (isAddDisabled) return

      const nextId = books.length ? Math.max(...books.map((book) => book.id)) + 1 : 0
    const newBook = {
      id: nextId,
      name: formData.title.trim(),
      author: formData.author.trim(),
      coAuthor: formData.coAuthor.trim() || undefined,
      coverImg: formData.coverImg.trim(),
      rating: Number(formData.rating) || 0,
      sequels: [],
    }

    
    setBooks((prev) => [...prev, newBook])
    setFormData(emptyForm)
  }

  return (
    <main className="page">
      <section className="selectedBookPanel">
        <img className="mainCover" src={selectedBook.coverImg} alt={selectedBook.name} />

        <div className="bookMeta">
          <h1 className="bookTitle">{selectedBook.name}</h1>
          <p>
            <strong>Author:</strong> {selectedBook.author}
            {selectedBook.coAuthor ? `, ${selectedBook.coAuthor}` : ''}
          </p>

          <div>
            <strong>Sequels:</strong>
            {selectedBook.sequels?.length ? (
              <ol>
                {selectedBook.sequels.map((sequel) => (
                  <li key={sequel}>{sequel}</li>
                ))}
              </ol>
            ) : (
              <p>No sequels</p>
            )}
          </div>

          <p>
            <strong>Rating:</strong> {getStars(selectedBook.rating)}
          </p>
        </div>
      </section>

      <section className="listSection">
        <h2>Select a Book</h2>
        <ul className="bookList">
          {books.map((book) => (
            <li key={book.id}>
              <button
                type="button"
                className={`bookListItem ${selectedBook.id === book.id ? 'active' : ''}`}
                onClick={() => setSelectedBookId(book.id)}
              >
                <img src={book.coverImg} alt={book.name} className="miniCover" />
                <span>{book.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="formSection">
        <h2>Add a Book</h2>
        <form className="addBookForm" onSubmit={handleAddBook}>
          <label>
            Title
            <input name="title" value={formData.title} onChange={handleFormChange} required />
          </label>

          <label>
            Author
            <input name="author" value={formData.author} onChange={handleFormChange} required />
          </label>

          <label>
            Co-Author
            <input name="coAuthor" value={formData.coAuthor} onChange={handleFormChange} />
          </label>

          <label>
            Cover URL
            <input name="coverImg" value={formData.coverImg} onChange={handleFormChange} required />
          </label>

          <label>
            Rating
            <input
              name="rating"
              type="number"
              min="0"
              value={formData.rating}
              onChange={handleFormChange}
              required
            />
          </label>

          <button type="submit" disabled={isAddDisabled}>
            Add
          </button>
        </form>
      </section>
    </main>
  )
}