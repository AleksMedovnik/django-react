import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from './UserProfile';

const Profile = props => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<UserProfile {...props}/>} />
                <Route path=":id" element={<UserProfile {...props}/>} />
            </Routes>
        </div>
    )
}
export default Profile;