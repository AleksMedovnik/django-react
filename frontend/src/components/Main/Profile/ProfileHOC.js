import { connect } from "react-redux";
import Profile from "./Profile";
import {
    getPosts,
    addPost,
    updateNewPostText,
    deletePost,
    updateUserName,
    updateNewPostTitle
} from '../../../store/reducers/profileReducer'

const mapStateToProps = state => {
    return {
        myName: state.profile.myName,
        userName: state.profile.userName,
        newPostText: state.profile.newPostText,
        newPostTitle: state.profile.newPostTitle,
        posts: state.profile.posts,
    }
};

export default connect(
    mapStateToProps,
    { updateUserName, getPosts, addPost, updateNewPostText, updateNewPostTitle, deletePost }
)(Profile);