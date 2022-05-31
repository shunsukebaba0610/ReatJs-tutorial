import React, { useState, createContext } from "react";
import Login from "../components/Login";
import User from "../components/User";

export const AppContext = createContext(null);

/*
*　createContextで括りつけたコンポネント要素に値を同時に渡す
*/
const Context = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      ContextTutorial
      <div>
        <AppContext.Provider value={{ username, setUsername }}>
          <Login />
          <User />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default Context;
