import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase-auth";

const Forgot = () => {
    const [email, setEmail] = useState("");
  
    const handleResetPassword = (e) => {
      e.preventDefault();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Password reset email sent successfully");
        })
        .catch((error) => {
          console.log("Error sending password reset email:", error);
        });
    };
  
    return (
      <div>
        <h1>Forgot password</h1>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  };
  
  export default Forgot;
  