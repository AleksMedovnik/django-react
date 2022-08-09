import { connect } from "react-redux";
import Profile from "./Profile";
import {
    getPosts,
    addPost,
    updateNewPostText,
    deletePost,
    updateUserProfile,
    updateNewPostTitle
} from '../../../store/reducers/profileReducer'

const mapStateToProps = state => {
    return {
        userProfile: state.profile.userProfile,
        newPostText: state.profile.newPostText,
        newPostTitle: state.profile.newPostTitle,
        posts: state.profile.posts,
    }
};

export default connect(
    mapStateToProps,
    { updateUserProfile, getPosts, addPost, updateNewPostText, updateNewPostTitle, deletePost }
)(Profile);