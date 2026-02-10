export default function InputForm({ formData, isAddDisabled, onFormChange, onAddBook }) {
  return (
    <form style={styles.form} onSubmit={onAddBook}>
      <h2 style={styles.title}>Add a Book</h2>

      <label style={fieldStyles.label}>
        Title
        <input
          style={fieldStyles.input}
          name="title"
          value={formData.title}
          onChange={onFormChange}
          required
        />
      </label>

      <label style={fieldStyles.label}>
        Author
        <input
          style={fieldStyles.input}
          name="author"
          value={formData.author}
          onChange={onFormChange}
          required
        />
      </label>

      <label style={fieldStyles.label}>
        Co-Author
        <input
          style={fieldStyles.input}
          name="coAuthor"
          value={formData.coAuthor}
          onChange={onFormChange}
        />
      </label>

      <label style={fieldStyles.label}>
        Cover URL
        <input
          style={fieldStyles.input}
          name="coverImg"
          value={formData.coverImg}
          onChange={onFormChange}
          required
        />
      </label>

      <label style={fieldStyles.label}>
        Rating
        <input
          style={fieldStyles.input}
          name="rating"
          type="number"
          min="0"
          max="5"
          value={formData.rating}
          onChange={onFormChange}
          required
        />
      </label>

      <button type="submit" style={styles.submit} disabled={isAddDisabled}>
        Add Book
      </button>
    </form>
  )
}

const fieldStyles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    fontSize: 13,
    color: '#ddd',
  },
  input: {
    border: '1px solid rgba(255,255,255,0.2)',
    background: '#121212',
    borderRadius: 8,
    color: '#fff',
    padding: '8px 10px',
  },
}

const styles = {
  form: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 18,
    background: '#0f0f0f',
    borderRadius: 16,
    color: '#fff',
  },
  title: {
    margin: 0,
    marginBottom: 6,
    fontSize: 20,
  },
  submit: {
    border: 'none',
    borderRadius: 8,
    padding: '10px 14px',
    background: '#4da3ff',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer',
  },
}