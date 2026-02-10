import BookList from "./BookList"
import BookTrack from "./BookTrack";

export default function PlayerLayout( {books, selectedBook} ) {
    return (
        <div style={styles.card}>
            <BookList books={books} selectedBook={selectedBook}/>
            <BookTrack selectedBook={selectedBook} />
        </div>
    )
}

const styles = {
     card: {
          background: "#111",
          display: "flex",
     },
};