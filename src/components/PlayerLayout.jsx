import AlbumSidebar from "./BookList"
import AlbumTrack from "./BookTrack";

export default function PlayerLayout( {books, selectedBook} ) {
    return (
        <div style={styles.card}>
            <AlbumSidebar books={books} selectedBook={selectedBook}/>
            <AlbumTrack selectedBook={selectedBook} />
        </div>
    )
}

const styles = {
     card: {
          background: "#111",
          display: "flex",
     },
};