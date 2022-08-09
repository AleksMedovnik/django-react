import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from './Post/Post';
import axios from 'axios';

const UserProfile = props => {
    let params = useParams()
    useEffect(() => {
        if (props.posts.length === 0) {
            axios.get('/posts/api/post/')
                .then(posts => props.getPosts(posts.data));
        }
        getUserProfile()
    }, []);

    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    const newPostTitle = (e) => {
        let text = e.target.value;
        props.updateNewPostTitle(text);
    }

    const addPost = () => {
        if (props.newPostText == 0) return
        axios({
            method: 'post',
            url: 'posts/api/post/',
            data: {
                title: props.newPostTitle,
                body: props.newPostText,
            }
        })
            .then((post) => props.addPost(post.data));
    };

    const deletePost = (id) => {
        axios.delete(`posts/api/post/${id}`)
            .then(() => props.deletePost(id));
    }


    const getUserProfile = () => {
        let id = params.id;
        if (id) {
            axios.get(`/api/user/${id}`)
                .then(profile => props.updateUserProfile(profile.data));
        } else {
            props.updateUserProfile(props.userProfile)
        }
    }



    const posts = props.posts.map(post => {
        const body = post.body[0].toUpperCase() + post.body.slice(1)
        return (
            <Post deletePost={deletePost} post_title={post.title} post_body={body} key={post.id} id={post.id} />
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
                    <h3>{props.userProfile.name}</h3>
                    <p>Возраст: {props.userProfile.age}</p>
                    <p>Страна: {props.userProfile.country}</p>
                    <p>Компания: {props.userProfile.company}</p>
                </div>
            </div>
            <div className='profile__newPost'>
                <textarea value={props.newPostTitle}
                    onChange={newPostTitle}
                    name="post_title" />
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