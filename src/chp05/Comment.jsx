import React from "react";

const styles = {
    wrapper: {
        margin: 0,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img style={styles.image}
                    src="https://upload.wikipedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                />
                <div style={styles.contentContainer}>
                    <span style={styles.nameText}>민경주</span>
                    <span style={styles.commentText}>React Component내에서 스타일 정의해서 사용해 봅니다.</span>
                </div>
            </div>
        </div>
    );
}

export default Comment;