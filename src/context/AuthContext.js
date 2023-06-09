import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "../firebase-auth";

export const UserContext = createContext();

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// export const AuthContextProvider = ({ children }) => {

//   return (
//     // <UserContext.Provider value={createUser}>{children}</UserContext.Provider>
//     <UserContext.Provider value={null}>{children}</UserContext.Provider>
//   );

// };

export const UserAuth = () => {
  return useContext(UserContext);
};