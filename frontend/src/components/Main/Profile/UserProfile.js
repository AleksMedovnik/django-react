import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from './Post/Post';
import axios from 'axios';

const UserProfile = props => {
    let params = useParams()
    useEffect(() => {
        if (props.posts.length === 0) {
            axios.get('posts/api/post/')
                .then(posts => props.getPosts(posts.data));
        }

        // getUserName()
    }, []);

    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    const addPost = () => {
         axios({
           method: 'post',
           url: 'posts/api/post/',
           data: {
                 title: props.newPostText,
                 body: props.newPostText,
             }
         })
            .then((post) => props.addPost(post.data));
   };

   const deletePost = (id) => {
          axios.delete(`posts/api/post/${id}`)
              .then(() => props.deletePost(id));
   }


    /*   const getUserName = () => {
          let id = params.id;
          if(id){
              axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
              .then(response => props.updateUserName(response.data.name));
          } else {
              props.updateUserName(props.myName)
          }
      }
  
       */

    const posts = props.posts.map(post => {
        const body = post.body[0].toUpperCase() + post.body.slice(1)
        return (
             <Post deletePost={deletePost} post={body} key={post.id} id={post.id} />
        )
    })
        .reverse();
    return (
        <div>
            <div className='profile'>
                <div>
                    <img src='' alt={props.userName} className='profile__image' />
                </div>
                <div>
                    <span className='profile__name'>{props.userName}</span>
                </div>
            </div>
            <div className='profile__newPost'>
                <textarea value={props.newPostText}
                    onChange={newPostChange}
                    name="post" />
                <button onClick={addPost} className='btn btn-send'>Add Post</button>
            </div>
            <div className='profile__wall'>
                {posts}
            </div>
        </div>
    );
};

export default UserProfile;