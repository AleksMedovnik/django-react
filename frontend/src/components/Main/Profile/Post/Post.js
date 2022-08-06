import React from "react";

const Post = props => {
    return (
        <div className='post'>
            <p className='post__message'>{props.post}</p>
            <button
                onClick={() => props.deletePost(props.id)}
                type='button'
                className='btn btn-del'>Delete</button>
        </div>
    )
}
export default Post;