import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-auth";
import { signInWithEmailAndPassword } from "firebase/auth";

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
      alert("not registered");
    }
  };

  return (
    <div className="background">
      <h2>Login</h2>
      <form className="login-form" onSubmit={login}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />

        <button onClick={login} type="submit">
          Log In
        </button>
      </form>
      <NavLink to="studentRegister">Don't have an account</NavLink>
      <br></br>
      <NavLink to="studentForgot"> forgot password</NavLink>
    </div>
  );
};
export default Student;
