import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return(
        <div>
            <Comment name={"민경주"} comment={"컴포넌트 합성 실습을 하고 있습니다."}/>
            <Comment name={"김민지"} comment={"리액트 너무 재미있어요."}/>
            <Comment name={"조현욱"} comment={"컴포넌트 Props 실습 좋아요~"}/>
        </div>
    );
}

export default CommentList;