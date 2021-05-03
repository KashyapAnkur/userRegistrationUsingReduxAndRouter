import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { writeStorage, deleteFromStorage, useLocalStorage } from '@rehooks/local-storage';

function Registration() {

    const [user, setUser, deleteUser] = useLocalStorage('user');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        let ls = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
        ls.push(data);
        localStorage.setItem("user",JSON.stringify(ls));
        writeStorage('user', localStorage.getItem('user') ? localStorage.getItem('user') : ls)
    }
    console.log(watch("email"));

    return (
        <>
            {/* {user[0].email} */}
            
            <br />
            <Link to="/login">Go to Login</Link><br /><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter email" {...register("email", { required: true,pattern: {
                    value: /\S+@\S+.\S+/,
                    message: "Invalid email id"
                } })} /><br />
                {errors.email && <span role="alert">{errors.email.message ? errors.email.message : "This field is required"}</span>}<br />
                <input placeholder="Enter username" {...register("username", { required: true,minLength: {value: 5,message: "min length is 5"}, })} /><br />
                {errors.username && <span>This field is required</span>}<br />
                <input placeholder="Enter password" {...register("password", 
                { required: true, 
                    minLength: {
                        value: 6,
                        message: "min length is 6"
                    },
                    validate: (value) => {
                        if(/[A-Z]+/.test(value)) {
                            if(/^(?=.*[!@#$%^&*])/.test(value)){
                                return true;
                            } else {
                                return "Atleast one special character"
                            }
                        } else {
                            return "Atleast one capital letter"
                        }
                    }
                })} /><br />
                {errors.password ? (errors.password.message ? errors.password.message : "This field is required") : ""}<br />
                <input placeholder="Enter confirm password" {...register("confirmpassword", { required: true })} /><br />
                {errors.confirmpassword && <span>This field is required</span>}<br />

                <button type="submit">Submit</button>
                {/* <button onClick={deletee}>Delete</button> */}
            </form>
            
        </>
    )
}

export default Registration;