import AlbumSidebar from "./AlbumSidebar"
import AlbumTrack from "./AlbumTrack";

export default function PlayerLayout( {albums, selectedAlbum} ) {
    return (
        <div style={styles.card}>
            <AlbumSidebar albums={albums} selectedAlbum={selectedAlbum}/>
            <AlbumTrack selectedAlbum={selectedAlbum} />
        </div>
    )
}

const styles = {
     card: {
          background: "#111",
          display: "flex",
     },
};