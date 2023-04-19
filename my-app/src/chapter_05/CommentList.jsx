import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name: "누런강냉이",
        comment: "내가 만든 쿠키~",
    },
    {
        name: "하얀강냉이",
        comment: "너를 위해 구웠지!",
    },
    {
        name: "파란강냉이",
        comment: "맛있었지!",
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList