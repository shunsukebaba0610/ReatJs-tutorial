import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("shunsuke");

  const increment = () => {
    setCounter(counter + 1);
  };
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1>State</h1>
      <p>
        <input placeholder="何か入力してください" onChange={onChange} /> :{" "}
        {inputValue}
      </p>
      <p>
        {counter}: <button onClick={increment}>increment</button>
      </p>
    </div>
  );
};

export default State;
