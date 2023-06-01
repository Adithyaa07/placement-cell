import { useState } from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-auth";
const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
   try{
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user);
    alert("Successfully registered");
   }catch (error) {
    console.log(error.message);
    alert(error.message)

   }
  };

  return (
    <>
      <h1>register here</h1>
      <form className="student-register">
        <label htmlFor="FirstName">FirstName</label>
        <input />
        <label htmlFor="LastName">LastName</label>
        <input />
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />

        <label htmlFor="email">Password</label>
        <input
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <NavLink to="/student">
          <button onClick={register}>Confirm</button>
        </NavLink>
      </form>
    </>
  );
};
export default Register;
