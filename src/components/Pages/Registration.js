
import { NavLink } from "react-router-dom";



const Register = () => {
  return (
    <>
      <h1>register here</h1>
      <form className="student-register">
        <label htmlFor="FirstName">FirstName</label>
        <input />
        <label htmlFor="LastName">LastName</label>
        <input />
        <label htmlFor="email">Email</label>
        <input />

        <label htmlFor="email">Password</label>
        <input />
        <label htmlFor="email">Confirm Password</label>
        <input />
        <NavLink to='/student'><button >Confirm</button></NavLink>
      </form>
    </>
  );
};
export default Register;
