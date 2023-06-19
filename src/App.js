/* eslint-disable no-unused-vars */
import React from "react";
import { UserContext } from "./context/AuthContext";
import useUserData from "./hooks/userDataHook";
import Route from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const user = useUserData();
  return (
    <ChakraProvider>
      <UserContext.Provider value={user}>
        <Route />
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
