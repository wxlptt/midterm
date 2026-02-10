export default function AlbumSidebar({ books, selectedBook }) {
    return (
        <div style={styles.sidebar}>
        <div>
            <img
            src={selectedBook.coverImg}
            alt={selectedBook.name}
            style={styles.bigCover}
            />

             <div style={styles.albumTitle}>{selectedBook.name}</div>
            <div style={styles.author}>by {selectedBook.author}</div>
            {selectedBook.coAuthor ? (
                <div style={styles.coAuthor}>co-authored by {selectedBook.coAuthor}</div>
            ) : null}
            <div style={styles.rating}>Rating: {selectedBook.rating}/5</div>
        </div>

        <div style={styles.albumGrid}>
            {books.slice(0, 3).map((book) => {
            const isSelected = selectedBook.id === book.id;

            return (
                <div key={book.id} style={styles.albumItem}>
                <div
                    style={{
                    border: isSelected
                        ? "3px solid #4da3ff"
                        : "2px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <img
                    src={book.coverImg}
                    alt={book.name}
                    style={styles.thumb}
                    />
                </div>
                <div style={styles.albumName}>{book.name}</div>
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
