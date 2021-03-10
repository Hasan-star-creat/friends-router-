import React from 'react';
import { useState, useEffect } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [friends ,setFriends] = useState([]);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setFriends(data))
    }, [])
    return (
        <div>
              <h1>User : {friends.length}</h1>
     {
       friends.map(fd =>  <Users friend={fd}></Users> )
     }
        </div>
    );
};

export default Home;