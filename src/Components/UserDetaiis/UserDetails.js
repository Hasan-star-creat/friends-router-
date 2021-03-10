import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    const {userId} = useParams();

    const [friend , setFriend] = useState({});
    useEffect(() => {
         const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setFriend(data) )
    }, [])
    const {name , phone , email} = friend;
    return (
        <div>
             <h1>details id: {userId}</h1>
             <h2>Name: {name}</h2>
             <h2>Phone: {phone}</h2>
             <h2>eamil : {email}</h2>
        </div>
    );
};

export default UserDetails;