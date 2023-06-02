import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from"./Admin.module.css"

const Admin = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <body className={classes.body}>
        <div className={classes.authFormContainer}>
            
            <form className={classes.loginForm}onSubmit={handleSubmit}>
                <h1>Login</h1><div className={classes.content}>
                <div className={classes.inputField}>
                <label className={classes.label} htmlFor="email">Email</label>
                <input className={classes.input} value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /></div>
                <div className={classes.inputField}>
                <label className={classes.label} htmlFor="password">Password</label>
                <input className={classes.input} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /></div></div>
                <div className={classes.action}>
                <NavLink to='/adminPage'><button className={classes.button} type="submit">Log In</button></NavLink></div>
            </form>
           
        </div>
        </body>
    )
};
export default Admin;
