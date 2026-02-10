import { useState } from 'react'
import initialBooks from './data'
import './App.css'
import PlayerLayout from './components/Layout'

const emptyForm = {
  title: '',
  author: '',
  coAuthor: '',
  coverImg: '',
  rating: '',
}


export default function App() {
  const [books, setBooks] = useState(initialBooks)
  const [selectedBookId, setSelectedBookId] = useState(0)
  const [formData, setFormData] = useState(emptyForm)

  const selectedBook = books.find((book) => book.id === selectedBookId) ?? books[0]
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
    setSelectedBookId(nextId)
    setFormData(emptyForm)
  }

  return (
    <main className="page">
              <PlayerLayout
        books={books}
        selectedBook={selectedBook}
        onSelectBook={setSelectedBookId}
        formData={formData}
        isAddDisabled={isAddDisabled}
        onFormChange={handleFormChange}
        onAddBook={handleAddBook}
      />
    </main>
  )
}