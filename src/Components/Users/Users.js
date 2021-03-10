import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Users = (props) => {
    // console.log(props)
    const {name , email, id} = props.friend;
    const history = useHistory();
    const handlerDetails = (userId) => {
        const url = `user/${userId}`
        history.push(url)
    }
     const userStyle = {
         border:'1px solid lightgray',
         padding:'20px',
         borderRadius:'20px',
         margin:'20px',
         boxShadow: '5px 5px 10px gray'
     }
    return (
        <div style={userStyle}>
             <h2>Name: {name}</h2>
             <h2>email: {email}</h2>
              {/* <Link to={`/user/${id}`}>
                  <button>Show detail of {id}</button>
              </Link> */}
              <button className="btn btn-primary"  onClick={() => handlerDetails(id)}>Click Me</button>
        </div>
    );
};

export default Users;