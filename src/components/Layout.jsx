import BookList from './BookList'
import BookTrack from './BookTrack'
import InputForm from './InputForm'

export default function PlayerLayout({
  books,
  selectedBook,
  onSelectBook,
  formData,
  isAddDisabled,
  onFormChange,
  onAddBook,
}) {
  return (
    <div style={styles.card}>
      <BookList books={books} selectedBook={selectedBook} onSelectBook={onSelectBook} />
      <BookTrack selectedBook={selectedBook} />
      <InputForm
        formData={formData}
        isAddDisabled={isAddDisabled}
        onFormChange={onFormChange}
        onAddBook={onAddBook}
      />
    </div>
  )
}

const styles = {
    card: {
    background: '#111',
    display: 'flex',
    gap: 16,
    padding: 16,
    borderRadius: 16,
    alignItems: 'flex-start',
  },
};