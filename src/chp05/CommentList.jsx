import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return(
        <div>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    );
}

export default CommentList;