import React, { useState, useEffect } from "react";


const Main = () => {
    const [data, newData] = useState([]);
     useEffect(() => {
        if (data.length === 0){
            fetch("api/user")
                .then(response => response.json())
                .then(data => newData(data))
        }
     }, []);

     const users = data.map(user => {
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

export default Main;