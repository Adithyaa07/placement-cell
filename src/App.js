/* eslint-disable no-unused-vars */
import React from "react";
import { UserContext } from "./context/AuthContext";
import useUserData from "./hooks/userDataHook";
import Route from "./Routes";

function App() {
  const user = useUserData();
  return (
    <div>
      <UserContext.Provider value={user}>
        <Route />
      </UserContext.Provider>
      {/* <React.StrictMode>
        <Route />
      </React.StrictMode> */}
    </div>
  );
}

export default App;
