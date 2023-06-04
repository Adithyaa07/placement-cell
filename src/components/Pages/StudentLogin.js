import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import classes from "./StudentLogin.module.css";

const Student = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pass);

      navigate("/studentDetails");
    } catch (error) {
      console.log(error.message);
      alert("Not registered");
    }
  };

  return (
    <body>
      <div className={classes.background}>
        <form className={classes.loginForm} onSubmit={login}>
          <h2>Login</h2>
          <div className={classes.content}>
            <div className={classes.inputField}>
              <label className={classes.label} htmlFor="email">
                Email:
              </label>
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
              <label className={classes.label} htmlFor="password">
                Password:
              </label>
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
          <div className={classes.action}>
            <button className={classes.button} type="submit">
              Log In
            </button>

            <div className={classes.action}>
              <NavLink to="studentRegister">Don't have an account</NavLink>

              <NavLink to="studentForgot">Forgot password</NavLink>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Student;
