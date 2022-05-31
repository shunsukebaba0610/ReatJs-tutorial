import React, { useContext } from "react";
import { AppContext } from "../pages/Context";

const User = () => {
  const { username } = useContext(AppContext);

  return <div>User: {username}</div>;
};

export default User;
