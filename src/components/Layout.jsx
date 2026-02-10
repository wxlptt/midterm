import BookList from './BookList'
import InputForm from './InputForm'

export default function Layout({
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
    width: '100%',  
    background: '#111',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    padding: 16,
    borderRadius: 16,
    alignItems: 'flex-start',
  },
};