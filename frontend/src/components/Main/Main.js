import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import ProfileHOC from "./Profile/ProfileHOC";
import UsersHOC from "./Users/UsersHOC";


const Main = () => {
    return (
        <div className='main'>
            <Routes>
                <Route path="/" element={<UsersHOC />} />
                <Route path="users" element={<UsersHOC />} />
                <Route path="profile/*" element={<ProfileHOC />} />
            </Routes>
        </div>
    )
}
export default Main;