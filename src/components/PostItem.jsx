import React from "react";

function PostItem({post, number, remove}) {
    return (
        <div className="post">
            <div className="post__content">
                <p><strong>{number}. {post.title}</strong></p>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post_btns">
                <button onClick={() => remove(post)}>Delete</button>
            </div>
        </div>
)
}


export default PostItem;