export default function AlbumSidebar({ albums, selectedAlbum }) {
    return (
        <div style={styles.sidebar}>
        <div>
            <img
            src={selectedAlbum.coverImg}
            alt={selectedAlbum.name}
            style={styles.bigCover}
            />

            <div style={styles.albumTitle}>{selectedAlbum.name}</div>
        </div>

        <div style={styles.albumGrid}>
            {albums.slice(0, 3).map((album) => {
            const isSelected = selectedAlbum.id === album.id;

            return (
                <div key={album.id} style={styles.albumItem}>
                <div
                    style={{
                    border: isSelected
                        ? "3px solid #4da3ff"
                        : "2px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <img
                    src={album.coverImg}
                    alt={album.name}
                    style={styles.thumb}
                    />
                </div>
                <div style={styles.albumName}>{album.name}</div>
                </div>
            );
            })}
        </div>
        
        </div>
    );
}

const styles = {
    sidebar: {
        width: 320,
        padding: 18,
        background: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        gap: 30,
    },

    bigCover: {
        width: "100%",
        borderRadius: 14,
    },

    albumGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12,
    },

    albumItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        color: "#ddd",
        fontSize: 12,
        textAlign: "center",
    },

    thumb: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

    albumName: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: 80,
    },

    albumTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: 700,
        marginTop: "auto",
    },
};
