import React, { useEffect } from "react";
import axios from 'axios';


const Users = (props) => {
    useEffect(() => {
        if (props.users.length === 0) {
            axios.get('api/user')
                .then(users => props.getUsers(users.data));
        }
    }, []);

    const users = props.users.map(user => {
        return (
            <li key={user.id} id={user.id}>
                <h3>{user.name}</h3>
                <p>Возраст: {user.age}</p>
                <p>Страна: {user.country}</p>
                <p>Компания: {user.company}</p>
            </li>
        )
    })

    return (
        <div>
            <ul>{users}</ul>
        </div>
    )
}

export default Users;