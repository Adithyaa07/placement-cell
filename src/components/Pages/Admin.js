import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Admin.module.css";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={classes.adminContainer}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={classes.inputContainer}>
          <div className={classes.inputField}>
            <label htmlFor="email">Email</label>
            <input
             className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="password">Password</label>
            <input
             className={classes.input}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <NavLink to="/adminPage">
            <button className={classes.button} type="submit">Log In</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Admin;
