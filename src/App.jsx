import { albums } from './data'
import PlayerLayout from './components/PlayerLayout'

export default function App() {

    const selectedAlbum = albums[0];

    return (
        <div style={styles.page}>
            <PlayerLayout albums={albums} selectedAlbum={selectedAlbum} />
        </div>
    )
};

const styles = {
    page: {
        background: "#0b0b0b",
        padding: 24,
    }
}