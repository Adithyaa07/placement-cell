import React from "react";

import { AuthContextProvider } from "./context/AuthContext";

import Route from "./Routes";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Route />
      </AuthContextProvider>
    </div>
  );
}

export default App;
