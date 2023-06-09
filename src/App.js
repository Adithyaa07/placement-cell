/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContextProvider, UserContext } from "./context/AuthContext";
import useUserData from "./hooks/userDataHook";
import Route from "./Routes";

function App() {
  const user = useUserData();
  return (
    <div>
      <UserContext.Provider value={user} >
        <Route />
      </UserContext.Provider>
    </div>
  );
}

export default App;
