import React, { useRef, useState } from "react";

const Ref = () => {
  const [names, setNames] = useState([]);
  const inputRef = useRef(null);

  const Click = () => {
    setNames([...names, inputRef.current.value]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Ref</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={Click}>Change Name</button>
      <ul>
        {names.map((name, key) => (
          <li key={key}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ref;
