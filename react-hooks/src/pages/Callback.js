import React, { useCallback, useState } from "react";
import Child from "../components/Child";

const Callback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("ユーズコールバックフックス開発");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h1>CallbackTutorial</h1>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>ToggleButton</button>
      <div>{toggle && <h2>Toggle Display</h2>}</div>
    </div>
  );
};

export default Callback;
