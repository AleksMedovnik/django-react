const UPDATE_USER_NAME = 'UPDATE-USER-NAME';
const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    myName: 'Alex Honey',
    userName: '',
    newPostText: '',
    posts: [],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_NAME:
            return { ...state, userName: action.userName };
        case GET_POSTS:
            return ({ ...state, posts: [...state.posts, ...action.posts] })

        case ADD_POST:
            return { ...state, posts: [...state.posts, action.post], newPostText: '' };

        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newPostText };

        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.id) };

        default:
            return state;
    }
};

export const updateUserName = (userName) => ({ type: UPDATE_USER_NAME, userName })
export const getPosts = (posts) => ({ type: GET_POSTS, posts })
export const addPost = (post) => ({ type: ADD_POST, post })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })
export const deletePost = (id) => ({ type: DELETE_POST, id })

export default profileReducer;