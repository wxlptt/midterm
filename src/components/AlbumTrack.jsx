const tracks = [
    "Come Together",
    "Something",
    "Maxwell's Silver Hammer",
    "Oh! Darling",
    "Octopus's Garden",
    "I Want You (She's so Heavy)",
    "Here Comes The Sun",
    "Because",
    "You Never Give Me Your",
    "Sun King",
    "Mean Mr. Mustard",
    "Polythene Pam",
    "She Came In Through The Bathroom Window",
    "Golden Slumbers",
    "Carry That Weight",
    "The End",
];

export default function AlbumTrack({selectedAlbum}) {
    return (
        <div style={styles.wrapper}>
        <div style={styles.title}>{selectedAlbum.name}</div>

        <div style={styles.list}>
            {tracks.map((t, i) => (
            <div key={t} style={styles.row}>
                <span style={styles.left}>
                {i + 1} &nbsp; {t}
                </span>
                <span style={styles.play}>▶</span>
            </div>
            ))}
        </div>
        </div>
    );
}

const styles = {
    wrapper: {
        color: "#fff",
        padding: 20,
        background: "#000",
        borderRadius: 16,
        width: 360,
    },

    title: {
        fontSize: 28,
        fontWeight: 800,
        marginBottom: 12,
    },

    list: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },

    row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 16,
    },

    left: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingRight: 10,
    },

    play: {
        background: "#3b82f6",
        color: "#fff",
        borderRadius: "50%",
        width: 22,
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
    },
};
