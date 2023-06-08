/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Registration.module.css";
import { UserAuth } from "../../context/AuthContext";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");

  const createUser = UserAuth();
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(registerEmail, registerPassword);
      alert("User created successfully");
      navigate('/student')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className={classes.studentRegister}>
      <form className={classes.content}>
        <h1 className={classes.title}>Student Registration</h1>
        <div className={classes.inputField}>
          <label className={classes.label} htmlFor="email">
            Email:
          </label>
          <input
            className={classes.input}
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
        </div>
        <div className={classes.inputField}>
          <label className={classes.label} htmlFor="password">
            Password:
          </label>
          <input
            className={classes.input}
            type="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </div>
        <div className={classes.action}>
          <button className={classes.button} onClick={register}>
            Confirm
          </button>
          {/* <NavLink to="/student">
            
          </NavLink> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
