import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/MemberAction';
import {useHistory} from 'react-router-dom';

function Logout() {

    let dispatch = useDispatch();
    dispatch(logout());
    let history = useHistory();
    history.push("/login");
    return(
        <></>
    )
}

export default Logout;