import React from "react";

const Post = props => {
    return (
        <div className='post'>
            <h4>{props.post_title}</h4>
            <p className='post__message'>{props.post_body}</p>
            <button
                onClick={() => props.deletePost(props.id)}
                type='button'
                className='btn btn-del'>Delete</button>
        </div>
    )
}
export default Post;