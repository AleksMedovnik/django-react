import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import UsersHOC from "./Users/UsersHOC";


const Main = () => {
    return (
        <div className='main'>
            <Routes>
                <Route path="/" element={<UsersHOC />} />
            </Routes>
        </div>
    )
}
export default Main;