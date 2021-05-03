import React,{useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Member() {
    let history = useHistory();
    const loggedIn = useSelector(state => state);

    // if(!loggedIn)
    // history.goBack();
    if(!loggedIn)
    history.push("/login");
    const {username,password,email} = useParams();
    return (
        <>
            <Link to="/logout">Logout</Link><br /><br />
            Username: {username}<br />
            Password: {password}<br />
            Email: {email}<br />
        </>
    )
}

export default Member;