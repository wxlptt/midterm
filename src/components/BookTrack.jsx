

export default function BookTrack({selectedBook}) {
    const sequels = selectedBook.sequels ?? [];
    return (
        <div style={styles.wrapper}>
        <div style={styles.title}>{selectedBook.name}</div>

        <div style={styles.list}>
                   {sequels.length > 0 ? (
                sequels.map((sequel, i) => (
                    <div key={sequel} style={styles.row}>
                        <span style={styles.left}>
                            {i + 1} &nbsp; {sequel}
                        </span>
                    </div>
                ))
            ) : (
                <div style={styles.empty}>No sequels listed for this book.</div>
            )}
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
