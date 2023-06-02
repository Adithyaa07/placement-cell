import { useState } from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-auth";
import classes from "./Registration.module.css";
const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      alert("Successfully registered");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <body>
      <form className={classes.studentRegister}>
        <div className={classes.content}>
          <h1>Student Registration</h1>
          <div className={classes.inputField}>
            <label className={classes.label} htmlFor="email">
              Email :{" "}
            </label>
            <input
              className={classes.input}
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className={classes.inputField}>
            <label className={classes.label} htmlFor="email">
              Password :{" "}
            </label>
            <input
              className={classes.input}
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
          <div className={classes.action}>
            <NavLink to="/student">
              <button className={classes.button} onClick={register}>
                Confirm
              </button>
            </NavLink>
          </div>
        </div>
      </form>
    </body>
  );
};
export default Register;
