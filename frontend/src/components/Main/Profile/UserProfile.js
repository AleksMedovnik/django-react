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

    /*   const getUserName = () => {
          let id = params.id;
          if(id){
              axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
              .then(response => props.updateUserName(response.data.name));
          } else {
              props.updateUserName(props.myName)
          }
      }
  
      const addPost = () => {
          axios.post('https://jsonplaceholder.typicode.com/posts', {
              body: JSON.stringify({
                  title: props.newPostText,
                  body: props.newPostText,
                  userId: 1,
                  id: props.posts[props.posts.length - 1].id + 1,
              }),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
          })
              .then((response) => JSON.parse(response.data.body))
              .then((post) => props.addPost(post));
      };
  
      const deletePost = (id) => {
          axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
              .then(() => props.deletePost(id));
      } */

    const posts = props.posts.map(post => {
        const body = post.body[0].toUpperCase() + post.body.slice(1)
        return (
            // <Post deletePost={deletePost} post={body} key={post.id} id={post.id} />
            <Post post={body} key={post.id} id={post.id} />
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
                {/*                 
                <button onClick={addPost} className='btn btn-send'>Add Post</button> */}
                
                <textarea value={props.newPostText}
                    onChange={newPostChange}
                    name="post" />
                <button className='btn btn-send'>Add Post</button>
            </div>
            <div className='profile__wall'>
                {posts}
            </div>
        </div>
    );
};

export default UserProfile;