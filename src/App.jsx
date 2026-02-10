import books from "./data"
import PlayerLayout from './components/PlayerLayout'

export default function App() {

    const selectedBook = books[0];

    return (
        <div style={styles.page}>
            <PlayerLayout books={books} selectedBook={selectedBook} />
        </div>
    )
};

const styles = {
    page: {
        background: "#0b0b0b",
        padding: 24,
    }
}