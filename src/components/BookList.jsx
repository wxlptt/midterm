export default function BookList({ books, selectedBook, onSelectBook }) {
  return (
    <div style={styles.sidebar}>
      <div>
        <img src={selectedBook.coverImg} alt={selectedBook.name} style={styles.bigCover} />

        <div style={styles.bookTitle}>{selectedBook.name}</div>
        <div style={styles.author}>by {selectedBook.author}</div>
        {selectedBook.coAuthor ? (
          <div style={styles.coAuthor}>co-authored by {selectedBook.coAuthor}</div>
        ) : null}
        <div style={styles.rating}>Rating: {selectedBook.rating}/5</div>
      </div>
      <div style={styles.bookGrid}>
        {books.map((book) => {
          const isSelected = selectedBook.id === book.id

             return (
            <button
              key={book.id}
              style={{
                ...styles.bookItem,
                border: isSelected ? '3px solid #4da3ff' : '2px solid rgba(255,255,255,0.08)',
              }}
              type="button"
              onClick={() => onSelectBook(book.id)}
            >
              <img src={book.coverImg} alt={book.name} style={styles.thumb} />
              <div style={styles.bookName}>{book.name}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
   sidebar: {
    width: 320,
    padding: 18,
    background: '#0f0f0f',
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    borderRadius: 16,
  },

  bigCover: {
    width: '100%',
    borderRadius: 14,
  },
  
  bookGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
  },

   bookItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    color: '#ddd',
    fontSize: 12,
    textAlign: 'center',
    background: 'transparent',
    borderRadius: 10,
    padding: 4,
    cursor: 'pointer',
  },


   thumb: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

   bookName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 80,
  },


  bookTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 700,
    marginTop: 'auto',
  },

  author: {
    color: '#ddd',
  },

  coAuthor: {
    color: '#bbb',
  },

  rating: {
    color: '#ddd',
  },

};
