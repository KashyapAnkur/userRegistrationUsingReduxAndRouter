import React from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { writeStorage, deleteFromStorage, useLocalStorage } from '@rehooks/local-storage';
import {login} from '../../actions/MemberAction';
import {useDispatch} from 'react-redux';


function Login() {
    let dispatch = useDispatch();
    let history = useHistory();
    const [user, setUser, deleteUser] = useLocalStorage('user');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        user.forEach( (val) => {
            if (data.username == val.username) {
                if(data.password == val.password) {
                    dispatch(login(true));
                    history.push(`/member/username=${data.username}/password=${data.password}/email=${val.email}`);
                } else {
                    alert("Wrong username or password");
                }
            } else {
                alert("Wrong username or password");
            }
        });
    }

    return (
        <>
            <Link to="/">Go to Register</Link><br /><br />
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter username" {...register("username", { required: true,
                    minLength: {
                        value: 5,
                        message: "min length is 5"
                    }, 
                    validate: (value) => {
                        if(/^(?=.*[!@#$%^&*])/.test(value)){
                            return "Username should not have any special character"
                        } else {
                            return true;
                        }
                    }
                    })} /><br />
                {errors.username ? (errors.username.message ? errors.username.message : "This field is required") : ""}<br /><br />
                <input placeholder="Enter password" {...register("password", { required: true })} /><br />
                {errors.password && <span>This field is required</span>}<br /><br />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;